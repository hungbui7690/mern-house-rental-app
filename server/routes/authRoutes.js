import express from 'express'
import {
  login,
  register,
  logout,
  getProfile,
} from '../controller/authController.js'
import authenticateUser from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/profile', authenticateUser, getProfile)

export default router
