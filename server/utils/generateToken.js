import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (userId, res) => {
  const houseRentalToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  })

  const oneDay = 1000 * 60 * 60 * 24
  res.cookie('houseRentalToken', houseRentalToken, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production', // # use only in PROD
    signed: true,
  })
}
