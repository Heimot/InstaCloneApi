const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const ProductsController = require('../controllers/posts');

router.get('/', checkAuth, ProductsController.products_get_all);

router.post('/create-a-post', checkAuth,  ProductsController.products_create_product);

router.get('/get/id/:productId', checkAuth, ProductsController.products_get_product);

router.delete('/delete/id/:productId', checkAuth, ProductsController.products_delete_product);

module.exports = router;