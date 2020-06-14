const Point = require('../../entities/Point')
const InvalidParamError = require('../../utils/errors/invalid-param-error')
const HttpResponse = require('../../utils/http-response')

module.exports = class UpdatePointUseCase {
  constructor (updatePointRepository, readPointRepository, pointValidator) {
    this.updatePointRepository = updatePointRepository
    this.pointValidator = pointValidator
    this.readPointRepository = readPointRepository
    this.httpResponse = HttpResponse
  }

  async UpdatePoint (pointParam) {
    try {
      const { idpoint, name, latitude, longitude, description, useremail } = pointParam

      const point = new Point(name, latitude, longitude, description, useremail, idpoint)

      this.pointValidator.UpdatePointValidator(point)

      const pointAlreadyExist = await this.readPointRepository.ReadPointByLongAndLat(point)

      if (pointAlreadyExist) {
        return this.httpResponse.conflictError('Point Already Exist')
      }

      const updatedPoint = await this.updatePointRepository.UpdatePoint(point)

      return this.httpResponse.Ok(updatedPoint)
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
