import { BadRequestError } from '../errors/index.js'
import Booking from '../models/Booking.js'
import { StatusCodes } from 'http-status-codes'

const createBooking = async (req, res) => {
  const { house, checkIn, checkOut, phone, total } = req.body
  const { _id: userId } = req.user

  if (!house || !checkIn || !checkOut || !phone || !total)
    throw new BadRequestError('Please provide all values')

  const booking = await Booking.create({
    house,
    checkIn,
    checkOut,
    phone,
    total,
    user: userId,
  })

  res.status(StatusCodes.CREATED).json({ booking })
}

const getAllBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
  res.status(StatusCodes.OK).json({ bookings })
}

export { createBooking, getAllBookings }
