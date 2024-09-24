import { generateTokenAndSetCookie } from '../utils/generateToken.js'
import User from '../model/User.js'
import bcrypt from 'bcryptjs'
import { BadRequestError } from '../errors/index.js'
import { StatusCodes } from 'http-status-codes'

const register = async (req, res) => {
  const { fullName, username, password } = req.body

  if (!fullName || !username || !password)
    throw new BadRequestError('Please provide all values')

  const isUserExist = await User.findOne({ username })
  if (isUserExist) {
    throw new BadRequestError('Username is already taken')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = new User({
    fullName,
    username,
    password: hashedPassword,
    profileImg: '/avatar.png',
  })

  if (!newUser) throw new BadRequestError('Could not create user')

  generateTokenAndSetCookie(newUser._id, res)
  await newUser.save()

  newUser.password = undefined

  res.status(StatusCodes.CREATED).json({
    newUser,
  })
}

const login = async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  if (!user) throw new BadRequestError('username does not exist')

  const isPasswordCorrect = await bcrypt.compare(password, user?.password)
  if (!isPasswordCorrect) throw new BadRequestError('Password is incorrect')

  generateTokenAndSetCookie(user._id, res)

  user.password = undefined

  res.status(200).json({
    user,
  })
}

const logout = async (req, res) => {
  res.cookie('token', '', { maxAge: 0 })
  res.status(StatusCodes.OK).json({ message: 'Logged out successfully' })
}

const getProfile = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user })
}

export { register, login, logout, getProfile }
