const Point = require('../../entities-db/point')

module.exports = class ReadPointRepository {
  async ReadPointByLongAndLat (point) {
    try {
      const { longitude, latitude } = point

      const read = await Point.findOne({
        where: {
          longitude: longitude,
          latitude: latitude
        }
      })
      return read
    } catch (err) {
      return err
    }
  }
}
