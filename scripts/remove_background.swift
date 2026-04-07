import AppKit
import CoreImage
import CoreImage.CIFilterBuiltins
import Foundation
import ImageIO
import UniformTypeIdentifiers
import Vision

enum RemoveBackgroundError: Error {
  case invalidArguments
  case imageLoadFailed
  case cgImageCreationFailed
  case noMaskProduced
  case outputCreationFailed
}

func loadCGImage(from path: String) throws -> CGImage {
  guard
    let image = NSImage(contentsOfFile: path),
    let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil)
  else {
    throw RemoveBackgroundError.imageLoadFailed
  }

  let width = cgImage.width
  let height = cgImage.height
  let colorSpace = CGColorSpaceCreateDeviceRGB()

  guard
    let context = CGContext(
      data: nil,
      width: width,
      height: height,
      bitsPerComponent: 8,
      bytesPerRow: 0,
      space: colorSpace,
      bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    )
  else {
    throw RemoveBackgroundError.cgImageCreationFailed
  }

  context.draw(cgImage, in: CGRect(x: 0, y: 0, width: width, height: height))

  guard let normalized = context.makeImage() else {
    throw RemoveBackgroundError.cgImageCreationFailed
  }

  return normalized
}

func makeTransparentCutout(from cgImage: CGImage) throws -> CIImage {
  let request = VNGeneratePersonSegmentationRequest()
  request.qualityLevel = .accurate
  request.outputPixelFormat = kCVPixelFormatType_OneComponent8
  request.usesCPUOnly = true

  let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
  try handler.perform([request])

  guard
    let result = request.results?.first as? VNPixelBufferObservation
  else {
    throw RemoveBackgroundError.noMaskProduced
  }

  let inputImage = CIImage(cgImage: cgImage)
  let maskImage = CIImage(cvPixelBuffer: result.pixelBuffer)

  let scaleX = inputImage.extent.width / maskImage.extent.width
  let scaleY = inputImage.extent.height / maskImage.extent.height

  let scaledMask = maskImage
    .transformed(by: CGAffineTransform(scaleX: scaleX, y: scaleY))
    .cropped(to: inputImage.extent)

  let clearBackground = CIImage(color: .clear).cropped(to: inputImage.extent)
  let blend = CIFilter.blendWithMask()
  blend.inputImage = inputImage
  blend.backgroundImage = clearBackground
  blend.maskImage = scaledMask

  guard let output = blend.outputImage else {
    throw RemoveBackgroundError.outputCreationFailed
  }

  return output
}

func writePNG(_ image: CIImage, to path: String) throws {
  let context = CIContext(options: [
    .useSoftwareRenderer: false,
  ])

  let colorSpace = CGColorSpaceCreateDeviceRGB()
  guard
    let cgImage = context.createCGImage(image, from: image.extent),
    let destination = CGImageDestinationCreateWithURL(
      URL(fileURLWithPath: path) as CFURL,
      UTType.png.identifier as CFString,
      1,
      nil
    )
  else {
    throw RemoveBackgroundError.outputCreationFailed
  }

  CGImageDestinationAddImage(destination, cgImage, [
    kCGImageDestinationLossyCompressionQuality: 1.0,
    kCGImagePropertyPNGDictionary: [:],
    kCGImageDestinationEmbedThumbnail: false,
  ] as CFDictionary)

  let options = NSMutableDictionary()
  options[kCGImagePropertyColorModel] = colorSpace.name

  guard CGImageDestinationFinalize(destination) else {
    throw RemoveBackgroundError.outputCreationFailed
  }
}

do {
  guard CommandLine.arguments.count == 3 else {
    throw RemoveBackgroundError.invalidArguments
  }

  let inputPath = CommandLine.arguments[1]
  let outputPath = CommandLine.arguments[2]

  let cgImage = try loadCGImage(from: inputPath)
  let cutout = try makeTransparentCutout(from: cgImage)
  try writePNG(cutout, to: outputPath)
  print("Saved transparent cutout to \(outputPath)")
} catch {
  fputs("remove_background.swift failed: \(error)\n", stderr)
  exit(1)
}
