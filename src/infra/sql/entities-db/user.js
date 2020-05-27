const Sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const User = Sequelize.define('user', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  },
  email: {
    primaryKey: true,
    type: DataTypes.STRING
  },
  dateOfBirth: {
    type: DataTypes.DATE
  },
  createdAt: { type: DataTypes.DATE }
})

module.exports = User
