const InvalidParamError = require('../../utils/errors/invalid-param-error')
const HttpResponse = require('../../utils/http-response')

module.exports = class DeletePointUseCase {
  constructor (deletePointRepository) {
    this.deletePointRepository = deletePointRepository
    this.httpResponse = HttpResponse
  }

  async DeletePoint (pointParam) {
    try {
      const deletePoint = await this.deletePointRepository.DeletePoint(pointParam)

      return this.httpResponse.Ok(deletePoint)
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
