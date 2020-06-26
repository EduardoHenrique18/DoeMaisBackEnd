const Point = require('../../entities-db/point')
const ServerError = require('../../../../utils/errors/server-error')

module.exports = class DeletePointRepository {
  async DeletePoint (point) {
    try {
      const { pointId } = point

      return await Point.update({
        disable: true
      }, {
        where: { pointId }
      })
    } catch (err) {
      console.log(err)
      throw new ServerError()
    }
  }
}
