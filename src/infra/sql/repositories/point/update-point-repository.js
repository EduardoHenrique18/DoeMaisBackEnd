const Point = require('../../entities-db/point')

module.exports = class UpdatePointRepository {
  async UpdatePoint (point) {
    const { idpoint, name, latitude, longitude, description, userEmail } = point

    return Point.update({
      name,
      latitude,
      longitude,
      description,
      userEmail
    }, {
      where: { idpoint }
    })
  }
}
