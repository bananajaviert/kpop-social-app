import mongoose from 'mongoose'

const post_schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    max: 255,
    trim: true
  },
  image_file: {
    type: String
  },
  user_id: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Posts = mongoose.model('post', post_schema)

export default Posts