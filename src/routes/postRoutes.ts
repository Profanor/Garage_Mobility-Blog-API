import express from 'express';
import { createPost, getPostById, getPosts, updatePost } from '../controllers/postController';

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:postId', getPostById);
router.put('/:postId', updatePost);

export default router;