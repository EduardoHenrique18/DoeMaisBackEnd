const User = require('../../entities/User')
const InvalidParamError = require('../../utils/errors/invalid-param-error')
const HttpResponse = require('../../utils/http-response')

module.exports = class CreateUserUseCase {
  constructor (createUserRepository, readUserRepository, userValidator) {
    this.createUserRepository = createUserRepository
    this.userValidator = userValidator
    this.readUserRepository = readUserRepository
    this.httpResponse = HttpResponse
  }

  async CreateUser (userParam) {
    try {
      const { userName, password, dateOfBirth, email } = userParam

      const user = new User(userName, password, dateOfBirth, email)

      this.userValidator.CreateUserValidator(user)

      const userAlreadyExist = await this.readUserRepository.ReadUserById(user)

      if (userAlreadyExist) {
        return this.httpResponse.conflictError('User Already Exist')
      }

      const createdUser = await this.createUserRepository.CreateUser(user)

      return this.httpResponse.Ok(createdUser)
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
