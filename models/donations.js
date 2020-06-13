'use strict'
module.exports = (sequelize, DataTypes) => {
  const Donations = sequelize.define('Donations', {
    idDonation: DataTypes.INTEGER
  }, {})
  Donations.associate = function (models) {
    // associations can be defined here
  }
  return Donations
}
