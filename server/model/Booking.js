import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House',
  },
  checkIn: Date,
  checkOut: Date,
  phone: Number,
  total: Number,
})

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking
