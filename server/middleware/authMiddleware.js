import jwt from 'jsonwebtoken'
import User from '../model/User.js'
import { UnauthenticatedError, NotFoundError } from '../errors/index.js'

const authenticateUser = async (req, res, next) => {
  // get token from signed cookie
  const token = req.signedCookies.houseRentalToken
  if (!token) {
    throw new UnauthenticatedError('Unauthenticated - No Token Provided')
  }

  // verify token -> decode = {userId}
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  if (!decoded) {
    throw new UnauthenticatedError('Unauthenticated - Invalid Token')
  }

  // find user from userId return from token
  const user = await User.findById(decoded.userId).select('-password')
  if (!user) {
    throw new NotFoundError('User not found')
  }

  // attach user to req object
  req.user = user

  next()
}

export default authenticateUser
