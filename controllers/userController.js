const { sequelize, Sequelize } = require("../config/database")
const customerModel = require("../models/customers") (sequelize,Sequelize)
//customerModel.sync({ force:true })
exports.create = (req,res) => {
     const customerSetData = {
        name: req.body.name,
        email: req.body.email,
        passwd: req.body.passwd
    }
    customerModel.create(customerSetData).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({message: err.message})
    })


}