const DeletePointUseCase = require('../../use-cases/point/delete-point-usercase')
const DeletePointRepository = require('../../Infra/Sql/Repositories/Point/delete-point-repository')

module.exports = class DeletePointController {
  constructor () {
    this.deletePointRepository = new DeletePointRepository()
    this.deletePointUseCase = new DeletePointUseCase(this.deletePointRepository)
  }

  async DeletePoint (request, response) {
    const returnMessage = await this.deletePointUseCase.DeletePoint(request.body)
    console.log(returnMessage)
    response.status(returnMessage.statusCode).send(returnMessage)
  }
}
