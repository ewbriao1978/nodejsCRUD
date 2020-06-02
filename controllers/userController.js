const { sequelize, Sequelize } = require("../config/database")
const customerModel = require("../models/customers") (sequelize,Sequelize)
const md5 = require('md5')

exports.create = (req,res) => {
     const customerSetData = {
        name: req.body.name,
        email: req.body.email,
        passwd: md5(req.body.passwd)
    }

// 1 - arrumar flashdata (instalação se for preciso
//2 - testar gravação. Criar na  view a leitura do flash data
// 3 - validação e testar na view.

    customerModel.create(customerSetData).then(data => {
              //  req.flash("success_msg","User register successful.")
        res.redirect('/');
    }).catch(err => {
               // req.flash("error_msg", "There is a problem with user registration process.")
        res.redirect('/')
    })

}// exports