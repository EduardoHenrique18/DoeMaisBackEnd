const Point = require('../../entities-db/point')

module.exports = class CreatePointRepository {
  CreatePoint (point) {
    const { name, latitude, longitude, description, userEmail } = point

    return Point.update({
      name,
      latitude,
      longitude,
      description,
      userEmail
    })
  }
}
