const Point = require('../../entities-db/point')
const ServerError = require('../../../../utils/errors/server-error')

module.exports = class CreatePointRepository {
  CreatePoint (point) {
    try {
      const { name, latitude, longitude, description, userId, image } = point

      return Point.create({
        name,
        latitude,
        longitude,
        description,
        image,
        userId
      })
    } catch (err) {
      throw new ServerError()
    }
  }
}
