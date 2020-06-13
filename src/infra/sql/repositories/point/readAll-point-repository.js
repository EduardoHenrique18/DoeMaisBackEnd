const Point = require('../../entities-db/point')

module.exports = class ReadAllPointRepository {
  async ReadAllPoint () {
    const read = await Point.findAll({
      where: { delet: false }
    })
    console.log(read)
    return read
  }
}
