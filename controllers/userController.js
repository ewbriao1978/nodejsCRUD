const { sequelize, Sequelize } = require("../config/database")
const customerModel = require("../models/customers") (sequelize,Sequelize)
const md5 = require('md5')

exports.create = (req,res) => {
     const customerSetData = {
        name: req.body.name,
        email: req.body.email,
        passwd: md5(req.body.passwd)
    }

//2 - revisar aqui se ja existe um mail por callback
// 3 - validação e testar na view.
    customerModel.findAll({ 
        where: {
            email:customerSetData.email
        }

    }).then( result  => {
        // if exist one, so redirect to login page with suitable warning message
        req.flash("error_msg","User already registered.")        
        res.redirect('/')        
        
    }).catch( err  =>{

        customerModel.create(customerSetData).then(data => {
            req.flash("success_msg","User register successful.")
            res.redirect('/');
        }).catch((err) => {
            console.log("oops" + err.message)
            req.flash("error_msg", "There is a problem with user registration process.")
            res.redirect('/')
        })


    })

   

}// exports