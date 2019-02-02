const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// get all records.
router.get('/records', product_controller.records);
//create product
router.post('/create', product_controller.product_create);
//read product
router.get('/:id', product_controller.product_details);
//update product info
router.put('/:id/update', product_controller.product_update);
//delete a product
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;
