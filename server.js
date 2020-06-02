const express = require('express')
const app = express()
// general settings
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
// routes settings
//const admin = require ('./routes/admin')
const customersRoutes = require('./routes/customersRoutes')

// require models and database settings.
const { sequelize, Sequelize } = require("./config/database")
const customerModel = require("./models/customers")(sequelize,Sequelize)
const ordersModel = require("./models/orders")(sequelize,Sequelize)
customerModel.hasMany(ordersModel)
ordersModel.belongsTo(customerModel)


// some settings 
app.engine('handlebars', handlebars())
app.set('view engine','handlebars')

// use bodyparser to get post results and URI parameters
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(customersRoutes)


const PORT = 8081
app.listen(PORT,function(){
    console.log("Server running at " + PORT)
})