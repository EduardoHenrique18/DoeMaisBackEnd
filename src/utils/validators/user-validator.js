const InvalidParamError = require('../errors/invalid-param-error')
const Validate = require('validator')

module.exports = class UserValidator {
  CreateUserValidator (user) {
    const { userName, email, password, dateOfBirth } = user
    if (
      Validate.isEmpty(userName) ||
      !Validate.isAlphanumeric(userName) ||
      !Validate.isByteLength(userName, { min: 5, max: 30 })) {
      throw new InvalidParamError('userName')
    } else if (
      Validate.isEmpty(password) ||
      !Validate.isAlphanumeric(password) ||
      !Validate.isByteLength(password, { min: 5, max: 15 })) {
      throw new InvalidParamError('password')
    } else if (
      Validate.isEmpty(email) ||
      !Validate.isEmail(email)) {
      throw new InvalidParamError('email')
    } else if (
      Validate.isEmpty(dateOfBirth) ||
      !Validate.toDate(dateOfBirth)) {
      throw new InvalidParamError('dateOfBirth')
    }
  }
}
