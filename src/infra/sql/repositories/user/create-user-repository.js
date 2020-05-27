const User = require('../../entities-db/user')

module.exports = class CreateUserRepository {
  CreateUser (user) {
    const { userName, password, email, dateOfBirth } = user

    return User.create({
      userName,
      password,
      dateOfBirth,
      email
    })
  }
}
