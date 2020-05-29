const express = require("express")
const router = express.Router()
var userController = require("../controllers/userController")

router.get('/', (req,res) => {
    res.render("users/login",{ layout: false } )
})

router.get('/registration', (req,res) => {
    res.render("users/register",{title:"Registration", layout: "formregistermaster"})
})

router.post("/registration", userController.create)

module.exports = router