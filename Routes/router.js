// To define rotes for the client request

// Import expres
const express = require('express');

//import productController
const productController = require('../Controllers/productController')
const wishlistController = require('../Controllers/wishlistController')
const cartController =require('../Controllers/cartController')

//using express create an object for router class inorder to setup path
const router = new express.Router();

//resolve various client request 

//api call

//1 get all products
router.get('/products/allProducts',productController.getallproducts)

router.get('/products/viewProduct/:id',productController.viewProducts)

router.post('/products/addtowishlist',wishlistController.addtowishlist)

router.delete('/products/deletewishlist/:id',wishlistController.deletewishlist)

router.get('/products/wishlist',wishlistController.getwishlist)

router.post('/products/addtocart',cartController.addtocart)

router.get('/products/cart',cartController.getcart)

//increment cart count
router.get('/products/increment/:id',cartController.incrementCartItems)

//increment cart count
router.get('/products/decrement/:id',cartController.decrementCartItems)
//export router

//delete
router.delete('/products/deletecart/:id',cartController.deletecart)

//export router
module.exports = router

