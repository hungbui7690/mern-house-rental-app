import express from 'express'
import {
  createHouse,
  getAllHouses,
  getSingleHouse,
  deleteHouse,
  getAllHousesByUser,
  updateHouse,
} from '../controller/houseController.js'
import authenticateUser from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/', authenticateUser, createHouse)
router.get('/', getAllHouses)
router.get('/me', authenticateUser, getAllHousesByUser)
router.get('/:id', getSingleHouse)
router.delete('/:id', authenticateUser, deleteHouse)
router.patch('/:id', authenticateUser, updateHouse)

export default router
