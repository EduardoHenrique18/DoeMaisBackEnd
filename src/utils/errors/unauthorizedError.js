module.exports = class unauthorizedError extends Error {
  constructor (code) {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
    this.statusCode = code
  }
}
