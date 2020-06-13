const Sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const Point = Sequelize.define('point', {
  idpoint: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
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
  useremail: {
    type: DataTypes.STRING,
    references: 'users',
    referencesKey: 'userEmail'
  },
  createdAt: { type: DataTypes.DATE }
})

module.exports = Point
