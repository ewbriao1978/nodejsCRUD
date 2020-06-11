const { sequelize, Sequelize } = require("../config/database")
//models settings
const customerModel = require("../models/customers") (sequelize,Sequelize)
const ordersModel = require("../models/orders") (sequelize,Sequelize)



exports.adminView = (req,res) =>{

   /* customerMode.findAll({ 
        order: [['name', 'ASC']]}
        ).then( customers => {

    })


    ordersModel.findAll({
        order: [['description', 'ASC']]})
        .then( orders => {

    })*/


    /*
    SELECT `customers`.id, `customers`.name, `customers`.`email`, `orders`.id, `orders`.description,`orders`.`amount`   FROM `orders` INNER JOIN `customers` on `orders`.customer_id = `customers`.id ORDER BY `customers`.name, `orders`.description
    
    */

    customerModel.findAll({
        include: [{
          model: ordersModel,
          required: true
         }]
    }).then(results => {
        res.status(500).send({
            message: "DATA:",
            data:results.JSON()
    })}
    ).catch(err => {
        res.status(500).send({
            message: "Error "
          });
    });
        
      
    //res.render("admin/adminsession",{title:"ADMINISTRATION", layout: "sessionmaster", admin:false, customers:customers, orders:orders});
}// exports registrationMethod