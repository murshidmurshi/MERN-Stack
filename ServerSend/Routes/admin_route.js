const express = require('express')
const router = express.Router()
const { Register, Login, GetUser, ViewGrocery, InsertGrocery, ViewUser } = require('../Controllers/admin_controller')
const { UpdateGrocery, DeleteGrocery } = require('../Controllers/grocery_controller')
const { ViewOrder, UpdateOrder } = require('../Controllers/order_controller')
const { ViewPayment } = require('../Controllers/payment_controller')
const AdminAuth = require('../Middlewar/admin_auth')


// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },

//   filename: function (req, file, cb) {
//     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })

// const upload = multer({ storage: storage })

router.post('/register', Register)

router.post('/login', Login)

// router.post('/insert-grocery', AdminAuth, upload.single('grocery_image'), InsertGrocery)
router.post('/insert-grocery', AdminAuth,  InsertGrocery)

router.get('/view-grocery', AdminAuth, ViewGrocery)
router.get('/view-grocery/:id', AdminAuth, ViewGrocery)

router.delete('/delete-grocery/:id', AdminAuth, DeleteGrocery)
router.put('/update-grocery/:id', AdminAuth, UpdateGrocery)

router.get('/view-user', AdminAuth, ViewUser)
router.get('/view-user/:id', AdminAuth, ViewUser)

router.get('/view-order', AdminAuth, ViewOrder)
router.get('/view-order/:id', AdminAuth, ViewOrder)

router.put('/update-order/:id', UpdateOrder)

router.get('/view-payment', AdminAuth, ViewPayment)
router.get('/view-payment/:id', AdminAuth, ViewPayment)


module.exports = router