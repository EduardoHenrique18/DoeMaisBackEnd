const jwt = require('jsonwebtoken')

class TokenGenerator {
  static generate (userId) {
    jwt.sign({ id: userId }, process.env.TOKEN || '', {
      expiresIn: 10800
    })
  }
}

module.exports = TokenGenerator
