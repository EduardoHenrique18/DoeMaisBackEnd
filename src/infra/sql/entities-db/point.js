const Sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const Point = Sequelize.define('point', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: {
    type: DataTypes.STRING
  },
  longitude: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  userEmail: {
    type: DataTypes.STRING,
    references: 'users',
    referencesKey: 'userEmail'
  },
  createdAt: {
    type: DataTypes.DATE,
    references: ''
  }
})

module.exports = Point
