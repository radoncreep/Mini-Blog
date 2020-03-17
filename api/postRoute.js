const { Router } = require('express');

const router = Router();

const postController = require('../controllers/postcontroller');

router.get('/posts', postController.getPosts);

router.post('/createpost', postController.createPost);

router.get('/post/:postId', postController.getSinglePost);

router.put('/post/:postId', postController.updatePost);

module.exports = router;