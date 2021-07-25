import mongoose from 'mongoose'

const user_schema = mongoose.Schema({
  
  username: {
    type: String,
    required: true,
    min: 8,
    max: 255,
    trim: true
  },
  email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      trim: true
  },
  password: {
      type: String,
      required: true,
      min: 8,
      max: 1024,
      trim: true
  }
}, {
  timestamps: true
})

const User = mongoose.model('user', user_schema)

export default User