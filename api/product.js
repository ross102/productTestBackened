const express = require('express');
const router = express.Router();
const { createProduct, getProducts, getOneProduct } = require('../controllers/product');

// /product
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getOneProduct);

module.exports = router;
