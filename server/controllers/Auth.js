
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Validation route
import {
  register_validation,
  login_validation
} from '../routes/validation.js'

// Model
import User from '../models/UserModel.js'

export const register_controller = async (req, res) => {

  // Destructure Joi error valdiation
  const {error} = register_validation(req.body)
  if(error) return res.status(400).json(error.details[0].message)

  const email_exists = await User.findOne({email: req.body.email})
  if(email_exists) return res.status(400).json('Email already exists')

  // Encrypt password
  const salt = await bcrypt.genSalt(10)
  const hashed_password = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashed_password
  })

  try {
    await user.save()
    res.json('Created new account')
  } catch(error) {
    res.status(400).json(`Error: ${error}`)
  }
}

export const login_controller = async (req, res) => {

  // Destructure Joi error valdiation
  const {error} = login_validation(req.body)
  if(error) return res.status(400).json(error.details[0].message)

  // check if user exists
  const user = await User.findOne({email: req.body.email})
  if(!user) return res.status(400).json(`Email doesn't exists`)

  const verify_password = await bcrypt.compare(req.body.password, user.password)
  if(!verify_password) return res.status(400).json('Invalid password')

  try {
    const token = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET)
    res.header('auth-token', token).json({
      // Remove once checked
      id: user._id,
      token
    })

  } catch(error) {
    res.status(400).json(`Error: ${error}`)
  }
}