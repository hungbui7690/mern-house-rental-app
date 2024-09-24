import { StatusCodes } from 'http-status-codes'
import House from '../model/House.js'
import BadRequestError from '../errors/bad-request.js'

const createHouse = async (req, res) => {
  const {
    title,
    address,
    photos,
    description,
    price,
    utilities,
    extraInfo,
    maxGuests,
  } = req.body

  if (!title || !address || !price || !utilities || !maxGuests)
    throw new BadRequestError('Please provide all values')

  const house = await House.create({
    owner: req.user._id,
    price,
    title,
    address,
    photos: photos || [],
    description: description || 'No description',
    utilities,
    extraInfo: extraInfo || 'No extra info',
    maxGuests,
  })

  res.status(StatusCodes.CREATED).json({ house })
}

const getAllHouses = async (req, res) => {
  const houses = await House.find({})
  res.status(StatusCodes.OK).json({ houses })
}

const getAllHousesByUser = async (req, res) => {
  console.log(req.user)

  if (!req.user) throw new BadRequestError('User not found')

  const houses = await House.find({ owner: req.user._id })
  res.status(StatusCodes.OK).json({ houses })
}

const getSingleHouse = async (req, res) => {
  const house = await House.findById(req.params.id)

  if (!house) throw new BadRequestError('House not found')

  res.status(StatusCodes.OK).json({ house })
}

const deleteHouse = async (req, res) => {
  const house = await House.findByIdAndDelete(req.params.id)

  if (!house) throw new BadRequestError('House not found')

  res.status(StatusCodes.OK).json({ house })
}

const updateHouse = async (req, res) => {
  const { id: houseId } = req.params

  const house = await House.findByIdAndUpdate(houseId, req.body, {
    new: true,
    runValidators: true,
  })

  if (!house) throw new BadRequestError('House not found')

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
