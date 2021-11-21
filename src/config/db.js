const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'utkrsh',
    username: '******',
    password: '******'
})

module.exports = { db }