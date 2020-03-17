const { Router } = require('express');

const router = Router();

const categoryController = require('../controllers/category');

router.get('/category', categoryController.getCategory);

module.exports = router;
