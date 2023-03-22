// routes/postRouter.js
const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, updatePost,deletePost } = require('../controllers/postController');

router.post('/', createPost);
router.get('/', getAllPosts);
router.delete('/:postId',deletePost);
router.put('/:postId', updatePost );

module.exports = router;