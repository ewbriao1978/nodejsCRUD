const Sequelize = require('sequelize')


sequelize = new Sequelize('nodejsDB','root','',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}