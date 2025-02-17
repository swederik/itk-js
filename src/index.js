const itk = {}

import extensionToImageIO from './extensionToImageIO'
itk.extensionToImageIO = extensionToImageIO

import extensionToMeshIO from './extensionToMeshIO.js'
itk.extensionToMeshIO = extensionToMeshIO

import FloatTypes from './FloatTypes.js'
itk.FloatTypes = FloatTypes

import getFileExtension from './getFileExtension.js'
itk.getFileExtension = getFileExtension

import getMatrixElement from './getMatrixElement.js'
itk.getMatrixElement = getMatrixElement

import imageIOComponentToJSComponent from './imageIOComponentToJSComponent.js'
itk.imageIOComponentToJSComponent = imageIOComponentToJSComponent

import ImageIOIndex from './ImageIOIndex.js'
itk.ImageIOIndex = ImageIOIndex

import imageIOPixelTypeToJSPixelType from './imageIOPixelTypeToJSPixelType.js'
itk.imageIOPixelTypeToJSPixelType = imageIOPixelTypeToJSPixelType

import Image from './Image.js'
itk.Image = Image

import imageJSComponentToIOComponent from './imageJSComponentToIOComponent.js'
itk.imageJSComponentToIOComponent = imageJSComponentToIOComponent

import imageJSPixelTypeToIOPixelType from './imageJSPixelTypeToIOPixelType.js'
itk.imageJSPixelTypeToIOPixelType = imageJSPixelTypeToIOPixelType

import ImageType from './ImageType.js'
itk.ImageType = ImageType

import IntTypes from './IntTypes.js'
itk.IntTypes = IntTypes

import IOTypes from './IOTypes.js'
itk.IOTypes = IOTypes

import Matrix from './Matrix.js'
itk.Matrix = Matrix

import meshIOComponentToJSComponent from './meshIOComponentToJSComponent.js'
itk.meshIOComponentToJSComponent = meshIOComponentToJSComponent

import MeshIOIndex from './MeshIOIndex.js'
itk.MeshIOIndex = MeshIOIndex

import meshIOPixelTypeToJSPixelType from './meshIOPixelTypeToJSPixelType.js'
itk.meshIOPixelTypeToJSPixelType = meshIOPixelTypeToJSPixelType

import Mesh from './Mesh.js'
itk.Mesh = Mesh

import meshJSComponentToIOComponent from './meshJSComponentToIOComponent.js'
itk.meshJSComponentToIOComponent = meshJSComponentToIOComponent

import meshJSPixelTypeToIOPixelType from './meshJSPixelTypeToIOPixelType.js'
itk.meshJSPixelTypeToIOPixelType = meshJSPixelTypeToIOPixelType

import MeshType from './MeshType.js'
itk.MeshType = MeshType

import MimeToImageIO from './MimeToImageIO.js'
itk.MimeToImageIO = MimeToImageIO

import MimeToMeshIO from './MimeToMeshIO.js'
itk.MimeToMeshIO = MimeToMeshIO

import PixelTypes from './PixelTypes.js'
itk.PixelTypes = PixelTypes

import readArrayBuffer from './readArrayBuffer.js'
itk.readArrayBuffer = readArrayBuffer

import readBlob from './readBlob.js'
itk.readBlob = readBlob

import readFile from './readFile.js'
itk.readFile = readFile

import readImageArrayBuffer from './readImageArrayBuffer.js'
itk.readImageArrayBuffer = readImageArrayBuffer

import readImageBlob from './readImageBlob.js'
itk.readImageBlob = readImageBlob

import readImageDICOMFileSeries from './readImageDICOMFileSeries.js'
itk.readImageDICOMFileSeries = readImageDICOMFileSeries

import readImageFile from './readImageFile.js'
itk.readImageFile = readImageFile

import readMeshArrayBuffer from './readMeshArrayBuffer.js'
itk.readMeshArrayBuffer = readMeshArrayBuffer

import readMeshBlob from './readMeshBlob.js'
itk.readMeshBlob = readMeshBlob

import readMeshFile from './readMeshFile.js'
itk.readMeshFile = readMeshFile

import runPipelineBrowser from './runPipelineBrowser.js'
itk.runPipelineBrowser = runPipelineBrowser

import setMatrixElement from './setMatrixElement.js'
itk.setMatrixElement = setMatrixElement

import writeArrayBuffer from './writeArrayBuffer.js'
itk.writeArrayBuffer = writeArrayBuffer

import writeImageArrayBuffer from './writeImageArrayBuffer.js'
itk.writeImageArrayBuffer = writeImageArrayBuffer

import writeMeshArrayBuffer from './writeMeshArrayBuffer.js'
itk.writeMeshArrayBuffer = writeMeshArrayBuffer


// Expose itk to global scope without exporting it so nested namespace
// do not pollute the global one.
window.itk = itk
