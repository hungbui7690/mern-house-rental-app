import { StatusCodes } from 'http-status-codes'
import House from '../model/House.js'
import BadRequestError from '../errors/bad-request.js'
import fs from 'fs'
import { v2 as cloudinary } from 'cloudinary'
import pLimit from 'p-limit'

const createHouse = async (req, res) => {
  const limit = pLimit(10)
  const {
    title,
    address,
    description,
    price,
    utilities,
    extraInfo,
    maxGuests,
  } = req.body

  if (
    !title ||
    !description ||
    !address ||
    !price ||
    !utilities ||
    !maxGuests ||
    !extraInfo
  )
    throw new BadRequestError('Please provide all fields')

  // UTILITIES
  let utilitiesList = null
  if (utilities) {
    utilitiesList = JSON.parse(utilities)
  }

  // PHOTOS
  let uploads
  const photoURLs = []
  const tempURLs = []
  if (req.files) {
    const photos = req.files?.photos

    const imagesToUpload = photos.map((photo) => {
      return limit(async () => {
        const result = await cloudinary.uploader.upload(photo.tempFilePath)
        tempURLs.push(photo.tempFilePath)
        return result
      })
    })

    uploads = await Promise.all(imagesToUpload)
    uploads?.forEach((upload) => {
      photoURLs.push(upload.secure_url)
    })
  }

  if (tempURLs.length > 0)
    tempURLs.forEach((url) => {
      fs.unlinkSync(url)
    })

  const house = await House.create({
    owner: req.user._id,
    price,
    title,
    address,
    photos: photoURLs || [],
    description: description || 'No description',
    utilities: utilitiesList || [],
    extraInfo: extraInfo || 'No extra info',
    maxGuests,
  })

  res.status(StatusCodes.CREATED).json({ house })
}

const getAllHouses = async (req, res) => {
  const houses = await House.find({}).populate('owner', {
    password: 0,
  })
  res.status(StatusCodes.OK).json({ houses })
}

const getAllHousesByUser = async (req, res) => {
  console.log(req.user)

  if (!req.user) throw new BadRequestError('User not found')

  const houses = await House.find({ owner: req.user._id }).populate('owner', {
    password: 0,
  })
  res.status(StatusCodes.OK).json({ houses })
}

const getSingleHouse = async (req, res) => {
  const house = await House.findById(req.params.id).populate('owner', {
    password: 0,
  })

  if (!house) throw new BadRequestError('House not found')

  res.status(StatusCodes.OK).json({ house })
}

const deleteHouse = async (req, res) => {
  const house = await House.findByIdAndDelete(req.params.id)

  if (!house) throw new BadRequestError('Cannot delete house')

  res.status(StatusCodes.OK).json({ house })
}

const updateHouse = async (req, res) => {
  const { id: houseId } = req.params

  const house = await House.findByIdAndUpdate(houseId, req.body, {
    new: true,
    runValidators: true,
  })

  if (!house) throw new BadRequestError('Cannot update house')

  res.status(StatusCodes.OK).json({ house })
}

export {
  createHouse,
  getAllHouses,
  getSingleHouse,
  deleteHouse,
  getAllHousesByUser,
  updateHouse,
}
