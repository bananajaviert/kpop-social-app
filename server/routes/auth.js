import express from 'express'

// Controllers
import {register_controller} from '../controllers/Auth.js'

export const router = express.Router()

router.post('/register', register_controller)
// router.post('/login', login_controller)