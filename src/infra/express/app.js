const express = require('express')
const cors = require('cors')
const Routes = require('./Routes')

const db = require('../sql/config/db')

class App {
  constructor () {
    this.express = express()

    this.dataBase()
    this.middlewares()
    this.routes()
  }

  dataBase () {
    db.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.')
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err)
      })
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  routes () {
    this.express.use(Routes)
  }
}

module.exports = new App().express
