const { db } = require('../config/db')

const { DataTypes } = require('sequelize')

const URL = db.define('urls', {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    code: {
        type: DataTypes.STRING(7),
        unique: true
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = { URL }