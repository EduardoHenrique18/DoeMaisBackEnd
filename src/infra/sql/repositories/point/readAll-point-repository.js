const Point = require('../../entities-db/point')

module.exports = class ReadAllPointRepository {
  async ReadAllPoint () {
    try {
      const read = await Point.findAll({
        where: { delet: false }
      })
      return read
    } catch (err) {
      return err
    }
  }
}
