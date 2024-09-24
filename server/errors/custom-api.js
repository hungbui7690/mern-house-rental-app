import { StatusCodes } from 'http-status-codes'

class CustomAPIError extends Error {
  constructor(message) {
    let err = {}
    super(message)
    this.stack = new Error().stack
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

export default CustomAPIError
