const ReadAllPointUseCase = require('../../use-cases/point/readAll-point-usercase')
const ReadAllPointRepository = require('../../Infra/Sql/Repositories/Point/readAll-point-repository')

module.exports = class ReadAllPointController {
  constructor () {
    this.readAllPointRepository = new ReadAllPointRepository()
    this.readAllPointUseCase = new ReadAllPointUseCase(this.readAllPointRepository)
  }

  async ReadAllPoint (request, response) {
    const returnMessage = await this.readAllPointUseCase.ReadAllPoint(request.body)
    console.log(returnMessage)
    response.status(returnMessage.statusCode).send(returnMessage)
  }
}
