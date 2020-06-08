const InvalidParamError = require('../errors/invalid-param-error')
const Validate = require('validator')

module.exports = class PointValidator {
  CreatePointValidator (point) {
    const { name, latitude, longitude, description, userEmail } = point
    if (
      Validate.isEmpty(name) ||
            !Validate.isAlphanumeric(name) ||
            !Validate.isByteLength(name, { min: 5, max: 50 })) {
      throw new InvalidParamError('name')
    } else if (
      Validate.isEmpty(latitude) ||
            !Validate.isAlphanumeric(latitude) ||
            !Validate.isByteLength(latitude, { min: 5, max: 10 })) {
      throw new InvalidParamError('latitude')
    } else if (
      Validate.isEmpty(longitude) ||
            !Validate.isAlphanumeric(longitude) ||
            !Validate.isByteLength(longitude, { min: 5, max: 10 })) {
      throw new InvalidParamError('longitude')
    } else if (
      Validate.isEmpty(description) ||
            !Validate.isAlphanumeric(description) ||
            !Validate.isByteLength(description, { min: 5, max: 50 })) {
      throw new InvalidParamError('description')
    } else if (
      Validate.isEmpty(userEmail) ||
            !Validate.isEmail(userEmail)) {
      throw new InvalidParamError('userEmail')
    }
  }
}
