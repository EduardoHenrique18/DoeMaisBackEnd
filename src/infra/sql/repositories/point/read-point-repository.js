const Point = require('../../entities-db/point')

module.exports = class ReadPointRepository {
  async ReadPointByLongAndLat (point) {
    const { longitude, latitude } = point

    const read = await Point.findOne({
      where: {
        longitude: longitude,
        latitude: latitude
      }
    })
    console.log(read)
    return read
  }
}
