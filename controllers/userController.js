const { sequelize, Sequelize } = require("../config/database")
const customerModel = require("../models/customers") (sequelize,Sequelize)
const md5 = require('md5')
const { validationResult } = require('express-validator');


exports.registrationMethod = (req,res) =>{
    res.render("users/register",{title:"Registration", layout: "formregistermaster", errors: req.session.errors})
}// exports registrationMethod

exports.create =  (req,res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        req.session.errors = errors.array()
        return res.redirect('/registration')
    }
  

     const customerSetData = {
        name: req.body.name,
        email: req.body.email,
        passwd: md5(req.body.passwd)
    }

    customerModel.findOne({ 
        where: {
            email:customerSetData.email
        }

    }).then( (result)  => {
        if (!result) {   
            
            customerModel.create(customerSetData).then(data => {
                req.flash("success_msg","User register successful.")
                console.log("User register successful.")       
                res.redirect('/');
            }).catch((err) => {
                console.log("oops" + err.message)
                req.flash("error_msg", "There is a problem with user registration process.")
                res.redirect('/')
            })


            //res.send({ message:"not result", error: result, email: customerSetData.email} )
        }else{
        
            // if exist one, so redirect to login page with suitable warning message
            req.flash("error_msg","User already registered.") 
            //res.send({ error: result, email: customerSetData.email} )
            console.log("User already registered...")  
            res.redirect('/')  
        }
             
        
    }).catch( (err)  =>{

        console.log("oops" + err.message)
        req.flash("error_msg", "There is a problem with user registration process.")
        res.redirect('/')

    })

   

}// exports create



exports.login = (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        req.session.errors = errors.array()
        return res.redirect('/')
    }

    const customerSetData = {
        name: req.body.name,
        email: req.body.email,
        passwd: md5(req.body.passwd)
    }

    // 1 - fazer a autemticaçao Se houver erro, mencionar o erro. Senão entrar em outra rota/view. 
    
    customerModel.findOne({ 
        where: {
            email:customerSetData.email
        }

    }).then( (result)  => {
        if (!result) {   
            
            customerModel.create(customerSetData).then(data => {
                req.flash("success_msg","User register successful.")
                console.log("User register successful.")       
                res.redirect('/');
            }).catch((err) => {
                console.log("oops" + err.message)
                req.flash("error_msg", "There is a problem with user registration process.")
                res.redirect('/')
            })


            //res.send({ message:"not result", error: result, email: customerSetData.email} )
        }else{
        
            // if exist one, so redirect to login page with suitable warning message
            req.flash("error_msg","User already registered.") 
            //res.send({ error: result, email: customerSetData.email} )
            console.log("User already registered...")  
            res.redirect('/')  
        }
             
        
    }).catch( (err)  =>{

        console.log("oops" + err.message)
        req.flash("error_msg", "There is a problem with user registration process.")
        res.redirect('/')

    })


}//exports login