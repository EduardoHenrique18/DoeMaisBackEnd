const Donation = require('../../entities-db/donation')
const ServerError = require('../../../../utils/errors/server-error')
const Point = require('../../entities-db/point')

module.exports = class ReadDonationRepository {
  async ReadDonationByPointId (pointId) {
    try {
      const read = await Donation.findAll({
        where: { pointId: pointId },
        include: [{
          association: Point
        }]
      })
      return read
    } catch (err) {
      console.log(err)
      throw new ServerError()
    }
  }

  async ReadDonationByImage (donation) {
    try {
      const { image } = donation

      const read = await Donation.findAll({
        where: {
          image
        }
      })
      return read
    } catch (err) {
      throw new ServerError()
    }
  }
}
