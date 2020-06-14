const Point = require('../../entities-db/point')

module.exports = class CreatePointRepository {
  CreatePoint (point) {
    try {
      const { name, latitude, longitude, description, userEmail } = point

      return Point.create({
        name,
        latitude,
        longitude,
        description,
        useremail: userEmail
      })
    } catch (err) {
      return err
    }
  }
}
