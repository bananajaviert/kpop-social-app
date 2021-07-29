import express from 'express'
import User from '../../models/UserModel.js'
import {verify_token} from '../token.js'

export const router = express.Router()

router.route('/users').get(verify_token, async (req, res) => {
  try {
    const users = await User.find()
    await res.json(users)

  } catch(error) {
    res.status(400).json(`Error ${error}`)
  }
})

