const Point = require('../../entities-db/point')
const ServerError = require('../../../../utils/errors/server-error')

module.exports = class UpdatePointRepository {
  async UpdatePoint (point) {
    try {
      const { pointId, name, latitude, longitude, description, image, userEmail } = point

      return Point.update({
        name,
        image,
        latitude,
        longitude,
        description,
        userEmail
      }, {
        where: { pointId }
      })
    } catch (err) {
      throw new ServerError()
    }
  }
}
