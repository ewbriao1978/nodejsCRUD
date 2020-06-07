const express = require("express")
const router = express.Router()
const { check } = require('express-validator');
var userController = require("../controllers/userController")

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


// routers

router.get('/', (req,res) => {
    res.render("users/login",{ layout: false } )
})

router.post('/login',loginFormValidator, userController.login)

router.get('/registration', userController.registrationMethod)
//router.get('/registration', (req,res) => {
//    res.render("users/register",{title:"Registration", layout: "formregistermaster", errors: req.session.errors})
//})

router.post("/registration", registrationFormValidator, userController.create)

module.exports = router