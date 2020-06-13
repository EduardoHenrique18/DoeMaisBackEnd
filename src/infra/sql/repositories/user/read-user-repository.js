const User = require('../../entities-db/user')

module.exports = class ReadUserRepository {
  async ReadUserById (user) {
    const { email, password } = user

    const user = await User.findOne({
      where: {
        email: email,
        password: password
      }     
    })

    return user
  }
}
