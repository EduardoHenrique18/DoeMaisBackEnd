const Sequelize = require('sequelize')

module.exports = new Sequelize('donation', 'root', '1123', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
