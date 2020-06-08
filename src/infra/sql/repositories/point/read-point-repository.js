const Point = require('../../entities-db/point')

module.exports = class ReadPointRepository {
  async ReadPointById (point) {
    const { idPoint } = point

    const read = await Point.findOne({
      where: {
        idPoint: idPoint
      },
      order: [['createdAt', 'DESC']]
    })

    return read
  }
}
