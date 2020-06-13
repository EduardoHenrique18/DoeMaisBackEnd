module.exports = class Point {
  constructor (name, latitude, longitude, description, userEmail, idpoint) {
    this.name = name
    this.latitude = latitude
    this.longitude = longitude
    this.description = description
    this.userEmail = userEmail
    this.idpoint = idpoint
  }
}
