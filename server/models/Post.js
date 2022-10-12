import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  creator: {
    type: String,
    trim: true,
  },
  tags: [String],
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('Post', postSchema);
