import validator from 'validator'
import bycrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import coachModel from '../models/coachModel.js'

// API for adding coach
const addCoach = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fee, address } = req.body
        const imageFile = req.file

        // checking for all data to add coach
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fee || !address) {
            return res.json({ success: false, message: "Missing details" })
        }

        //validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        // validate password stength
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" })
        }

        // hashing coach password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)

        // uploading coach image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const coachData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fee,
            address: JSON.parse(address),
            date: Date.now(),
        }

        const newCoach = new coachModel(coachData)
        await newCoach.save()

        res.json({ success: true, message: "Coach added successfully" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

//API for admin login
const loginAdmin = async (req, res) => {
    try {


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export { addCoach, loginAdmin }