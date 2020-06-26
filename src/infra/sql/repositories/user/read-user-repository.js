const User = require('../../entities-db/user')
const ServerError = require('../../../../utils/errors/server-error')

module.exports = class ReadUserRepository {
  async ReadUserByEmail (userParam) {
    try {
      const { email } = userParam

      const user = await User.findOne({
        where: {
          email: email
        }
      })

      return user
    } catch (err) {
      throw new ServerError()
    }
  }
}
