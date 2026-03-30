import express from 'express'
import { addCoach, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add-coach', upload.single('image'), addCoach)
adminRouter.post('/login', loginAdmin)


export default adminRouter