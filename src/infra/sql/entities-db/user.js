const Sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const User = Sequelize.define('user', {
  userId: {
    primaryKey: true,
    type: DataTypes.STRING
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  dateOfBirth: {
    type: DataTypes.DATE
  },
  createdAt: { type: DataTypes.DATE }
})

module.exports = User
