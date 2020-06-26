'use strict'
module.exports = (sequelize, DataTypes) => {
  const Points = sequelize.define('Points', {
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
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    createdAt: { type: DataTypes.DATE }
  }, {})
  Points.associate = models => {
    Points.BelongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Points
}
