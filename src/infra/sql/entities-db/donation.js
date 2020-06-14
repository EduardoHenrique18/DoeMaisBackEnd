const Sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

const Donation = Sequelize.define('Donation', {
  donationId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  image: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  pointId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Points',
      key: 'pointId'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'userId'
    }
  },
  disable: {
    type: DataTypes.BOOLEAN
  },
  public: {
    type: DataTypes.BOOLEAN
  },
  createdAt: {
    type: DataTypes.DATE
  }
})

module.exports = Donation
