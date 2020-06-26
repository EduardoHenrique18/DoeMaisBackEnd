const Donation = require('../../entities-db/donation')
const ServerError = require('../../../../utils/errors/server-error')

module.exports = class CreateDonationRepository {
  CreateDonation (donation) {
    try {
      const { name, description, userId, image, pointId, isPublic } = donation

      return Donation.create({
        name,
        pointId,
        isPublic,
        description,
        image,
        userId
      })
    } catch (err) {
      throw new ServerError()
    }
  }
}
