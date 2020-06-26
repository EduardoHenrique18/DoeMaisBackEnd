const Point = require('../../entities-db/point')
const ServerError = require('../../../../utils/errors/server-error')

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
      throw new ServerError()
    }
  }

  async ReadAllPoint () {
    try {
      const read = await Point.findAll({
        where: { disable: false }
      })
      return read
    } catch (err) {
      throw new ServerError()
    }
  }
}
