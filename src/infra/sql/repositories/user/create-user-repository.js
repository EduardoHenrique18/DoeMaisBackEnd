const User = require('../../entities-db/user')
const ServerError = require('../../../../utils/errors/server-error')

module.exports = class CreateUserRepository {
  CreateUser (user) {
    try {
      const { userName, password, email, dateOfBirth } = user

      return User.create({
        userName,
        password,
        dateOfBirth,
        email
      })
    } catch (err) {
      throw new ServerError()
    }
  }
}
