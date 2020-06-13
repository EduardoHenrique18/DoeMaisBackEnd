const UpdatePointUseCase = require('../../use-cases/point/update-point-usercase')
const UpdatePointRepository = require('../../Infra/Sql/Repositories/Point/update-point-repository')
const ReadPointRepository = require('../../Infra/Sql/Repositories/Point/read-point-repository')
const PointValidator = require('../../utils/validators/point-validator')

module.exports = class UpdatePointController {
  constructor () {
    this.updatePointRepository = new UpdatePointRepository()
    this.readPointRepository = new ReadPointRepository()
    this.pointValidator = new PointValidator()
    this.updatePointUseCase = new UpdatePointUseCase(this.updatePointRepository, this.readPointRepository, this.pointValidator)
  }

  async UpdatePoint (request, response) {
    const returnMessage = await this.updatePointUseCase.UpdatePoint(request.body)
    console.log(returnMessage)
    response.status(returnMessage.statusCode).send(returnMessage)
  }
}