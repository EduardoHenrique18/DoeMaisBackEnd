const Point = require('../../entities-db/point')

module.exports = class DeletePointRepository {
  async DeletePoint (point) {
    try {
      const { idpoint, delet } = point

      return Point.update({
        delet
      }, {
        where: { idpoint }
      })
    } catch (err) {
      console.log(err)
      return err
    }
  }
}
