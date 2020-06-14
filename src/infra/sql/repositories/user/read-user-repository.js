const User = require('../../entities-db/user')

module.exports = class ReadUserRepository {
  async ReadUserByEmail (userParam) {
    const { email } = userParam

    const user = await User.findOne({
      where: {
        email: email
      }
    })

    return user
  }
}
