const User = require('../../entities-db/user')

module.exports = class ReadUserRepository {
  async ReadUserById (user) {
    const { email } = user

    const teste = await User.findOne({
      where: {
        email: email
      },
      order: [['createdAt', 'DESC']]
    })

    return teste
  }
}
