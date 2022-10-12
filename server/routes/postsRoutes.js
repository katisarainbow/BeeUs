import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/postsControllers.js';
const router = Router();

// Posts

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.patch('/posts/:id', updatePost);
router.delete('/posts', deletePost);
router.get('/posts/:id', getPost);

export default router;
