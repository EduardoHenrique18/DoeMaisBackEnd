const LoginUseCase = require('../../use-cases/login/login-usecase')
const ReadUserRepository = require('../../Infra/Sql/Repositories/user/read-user-repository')
const LoginValidator = require('../../utils/validators/user-validator')

module.exports = class LoginController {
  constructor () {
    this.readUserRepository = new ReadUserRepository()
    this.loginValidator = new LoginValidator()
    this.LoginUseCase = new CreateLoginUseCase(this.readUserRepository, this.loginValidator)
  }

  async Login (request, response) {
    const returnMessage = await this.LoginUseCase.Login(request.body)
    console.log(returnMessage)
    response.status(returnMessage.statusCode).send(returnMessage)
  }
}
