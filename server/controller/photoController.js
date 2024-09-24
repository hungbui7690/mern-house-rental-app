import { v2 as cloudinary } from 'cloudinary'
import { BadRequestError } from '../errors/index.js'
import fs from 'fs'
import { StatusCodes } from 'http-status-codes'
import Photo from '../model/Photo.js'

const uploadPhoto = async (req, res) => {
  const { category, houseId } = req.body

  if (!req.files) {
    throw new BadRequestError('Please provide a file')
  }

  const file = req.files.photo
  if (!file.mimetype.startsWith('image'))
    throw new BadRequestError('Please provide an image')

  const maxSize = 2048 * 2048
  if (file.size > maxSize)
    throw new BadRequestError('Please provide an image smaller than 2MB')

  const newPhoto = new Photo({
    houseId,
    category,
    photos: [],
  })

  let photo = req.files?.img.tempFilePath

  if (photo) {
    const uploadedResponse = await cloudinary.uploader.upload(photo)
    fs.unlinkSync(photo)
    newPhoto.photos.push(uploadedResponse.secure_url)
  }

  await newPhoto.save()

  res.status(StatusCodes.OK).json({ newPhoto })
}

const deleteSinglePhoto = async (req, res) => {
  const { id: photoId } = req.params

  const photo = await Photo.findById(photoId)

  if (!photo) throw new BadRequestError('Photo list not found')

  const imgId = photo.photos[0].split('/').pop().split('.')[0]
  await cloudinary.uploader.destroy(imgId)
  await photo.remove()

  res.status(StatusCodes.OK).json({ msg: 'Photo deleted successfully' })
}

export { uploadPhoto, deleteSinglePhoto }
