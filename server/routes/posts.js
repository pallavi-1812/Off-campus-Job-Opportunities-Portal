import express from 'express';
import { createPosts, getPosts, updatePosts, deletePost, getPostsBySearch, getPostsBySearchByText } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/searchByText', getPostsBySearchByText);
router.get('/search', getPostsBySearch);
router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePosts);
router.delete('/:id', auth, deletePost);

export default router;