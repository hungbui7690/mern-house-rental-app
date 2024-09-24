import dotenv from 'dotenv'
dotenv.config()
import { connectDB } from '../db/connect.js'
import User from '../model/User.js'
import { users } from './users.js'

const populateDB = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('Connect to DB')

    await User.deleteMany()
    await User.insertMany(users)
    console.log('Populate DB')

    process.exit(0)
  } catch (error) {
    console.log('Cannot connect to DB', error.message)
    process.exit(1)
  }
}

populateDB()
