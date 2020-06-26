const Donation = require('../../entities-db/donation')
const ServerError = require('../../../../utils/errors/server-error')

module.exports = class UpdateDonationRepository {
  async UpdateDonation (donation) {
    try {
      const { name, description, userId, image, pointId, isPublic, donationId } = donation

      return Donation.update({
        name,
        image,
        userId,
        isPublic,
        description,
        pointId
      }, {
        where: { donationId }
      })
    } catch (err) {
      throw new ServerError()
    }
  }
}
