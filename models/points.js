'use strict'
module.exports = (sequelize, DataTypes) => {
  const Points = sequelize.define('Points', {
    idPoint: DataTypes.INTEGER
  }, {})
  Points.associate = function (models) {
    // associations can be defined here
  }
  return Points
}
