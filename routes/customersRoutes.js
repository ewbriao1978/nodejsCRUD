const express = require("express")
const router = express.Router()
const { check } = require('express-validator');
var userController = require("../controllers/userController")
var adminController = require("../controllers/adminController")

// validation rules
let registrationFormValidator = [
    check('name').isLength({ min: 5 }).withMessage('Name is required field.'), 
    check('email').isEmail().withMessage('Invalid e-mail format.'),
    check('passwd').isLength({ min: 5}).withMessage('Password is too short.')
]

let loginFormValidator = [ 
    check('email').isEmail().withMessage('Invalid e-mail format.'),
    check('password').isLength({ min: 5}).withMessage('Password is too short.')
]

let orderFormValidator = [ 
    check('description').isLength({ min: 5 }).withMessage('Too short description.'),
    check('amount').isFloat().withMessage('Amount must be a decimal number.')
]

// routers

router.get('/', (req,res) => {
    res.render("users/login",{ layout: false } )
})

router.post('/login',loginFormValidator, userController.login)

router.get('/logout',userController.logout)

router.get('/registration', userController.registrationMethod)

router.post("/registration", registrationFormValidator, userController.create)

router.get("/usersession",userController.userSession)

router.get("/orders", userController.ordersView)

router.post("/orders",orderFormValidator,userController.ordersSave)

router.get("/delete/:id",userController.deleteOrder)

router.get("/edit/:id",orderFormValidator,userController.updateFormOrder)

router.post("/edit/:id",orderFormValidator,userController.updateOrder)

router.get("/admin", adminController.adminView)




module.exports = router