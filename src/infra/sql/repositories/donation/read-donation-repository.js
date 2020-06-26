const Donation = require('../../entities-db/donation')
const ServerError = require('../../../../utils/errors/server-error')
const Point = require('../../entities-db/point')

module.exports = class ReadDonationRepository {
  async ReadDonationByPointId (pointId) {
    try {
      const results = await Point.sequelize.query(`SELECT * FROM donations as donations
                                                INNER JOIN users ON donations.userId = users.userId 
                                                WHERE donations.pointId = ${pointId} AND
                                                donations.isPublic = true`)
      return results[0]
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
