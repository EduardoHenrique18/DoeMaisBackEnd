'use strict'
module.exports = (sequelize, DataTypes) => {
  const Donations = sequelize.define('Donations', {
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
      type: DataTypes.TEXT('long')
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
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isPublic: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      type: DataTypes.DATE
    }
  }, {})

  Donations.associate = models => {
    Donations.BelongsTo(
      models.User, {
        foreignKey: {
          allowNull: false
        }
      }
    )
  }

  Donations.associate = models => {
    Donations.BelongsTo(
      models.Point, {
        foreignKey: {
          allowNull: false
        }
      }
    )
  }
  return Donations
}
