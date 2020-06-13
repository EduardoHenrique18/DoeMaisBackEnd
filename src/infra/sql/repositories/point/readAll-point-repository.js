const Point = require('../../entities-db/point')

module.exports = class ReadAllPointRepository {
  async ReadAllPoint () {
    const read = await Point.findAll()
    console.log(read)
    return read
  }
}
