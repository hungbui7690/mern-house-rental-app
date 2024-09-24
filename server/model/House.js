import mongoose from 'mongoose'

const houseSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  address: String,
  photos: [String],
  description: String,
  utilities: [String],
  extraInfo: String,
  maxGuests: Number,
  price: Number,
})

const House = mongoose.model('House', houseSchema)

export default House
