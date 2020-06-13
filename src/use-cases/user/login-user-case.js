const User = require('../../entities/User')
const InvalidParamError = require('../../utils/errors/invalid-param-error')
const HttpResponse = require('../../utils/http-response')

module.exports = class CreateUserUseCase {
  constructor (readUserRepository, userValidator) {
    this.userValidator = userValidator
    this.readUserRepository = readUserRepository
    this.httpResponse = HttpResponse
  }

  async CreateUser (userParam) {
    try {
      const { userName, password, dateOfBirth, email } = userParam

      const user = new User(userName, password, dateOfBirth, email)

      this.userValidator.LoginValidator(user)

      const user = await this.readUserRepository.ReadUserById(user)

      if (!user) {
        return this.httpResponse.unauthorizedError()
      }

      return this.httpResponse.Ok(user)
    } catch (error) {
      if (error instanceof InvalidParamError) {
        console.log(error)
        return this.httpResponse.InvalidParamError(error.message)
      } else {
        console.log(error)
        return this.httpResponse.ServerError()
      }
    }
  }
}
