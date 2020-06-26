const Sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const Point = Sequelize.define('point', {
  pointId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: false
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.STRING,
    references: 'users',
    referencesKey: 'userId'
  },
  disable: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: { type: DataTypes.DATE }
})

module.exports = Point
