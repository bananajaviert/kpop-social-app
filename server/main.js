import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import url from 'url'

// Routes
import {router as auth_router} from './routes/auth.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({
  path: path.resolve(__dirname, './.env')
})

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.ATLAS_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  app.listen(port , () => {
    console.log('Server & DB is running')
  })
})

app.use('/api', auth_router)