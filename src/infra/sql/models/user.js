'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
  }, {})
  User.associate = models => {
    User.hasMany(models.Donation)
  }

  User.associate = models => {
    User.hasMany(models.Point)
  }

  return User
}
