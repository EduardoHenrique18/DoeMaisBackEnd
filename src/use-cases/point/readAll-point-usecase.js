const InvalidParamError = require('../../utils/errors/invalid-param-error')
const HttpResponse = require('../../utils/http-response')

module.exports = class ReadAllPointUseCase {
  constructor (readAllPointRepository) {
    this.readAllPointRepository = readAllPointRepository
    this.httpResponse = HttpResponse
  }

  async ReadAllPoint () {
    try {
      const points = await this.readAllPointRepository.ReadAllPoint()

      return this.httpResponse.Ok(points)
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
