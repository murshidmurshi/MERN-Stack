const express = require('express')
const router = express.Router()
const { Register,
    Login,
    Shipping, 

    GetGroceries,
    InsertCart,
    ViewCart,
    DeleteCart,
    ViewOrder
 } = require('../Controllers/user_controller')
const UserAuth = require('../Middlewar/user_auth')

router.post('/register', Register)

router.post('/login', Login)


// router.get('/view-grocery', UserAuth, ViewGrocery) --old
// router.get('/view-grocery/:id', UserAuth, ViewGrocery) --old

router.get("/groceries", GetGroceries);
router.get("/grocery/:id",UserAuth, GetGroceries);

router.post('/insert-cart', UserAuth, InsertCart)
router.get('/view-cart', UserAuth, ViewCart)

router.get('/view-order', UserAuth, ViewOrder)

router.delete("/delete-cart/:id", UserAuth, DeleteCart);

router.post('/shipping', UserAuth, Shipping)

module.exports = router

// const router = require("express").Router();
// const userAuth = require('../Middleware/userAuth')
// const {
//   Register,
//   Login,
//   GetGroceries,
//   InsertCart,
//   ViewCart,
//   DeleteCart
// } = require("../Controller/user_controller");

// router.post("/register", Register);
// router.post("/login", Login);

// router.get("/groceries", GetGroceries);
// router.get("/grocery/:id",userAuth, GetGroceries);

// router.post("/insert-cart", userAuth, InsertCart);
// router.get("/view-cart", userAuth, ViewCart);

// router.delete("/delete-cart/:id", userAuth, DeleteCart);

// module.exports = router;
