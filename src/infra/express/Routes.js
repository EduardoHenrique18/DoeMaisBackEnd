const { Router } = require('express')
const CreateUserController = require('../../controllers/User/create-user-controller')
const CreatePointController = require('../../controllers/Point/create-point-controller')
const UpdatePointController = require('../../controllers/Point/update-point-controller')
const ReadAllPointController = require('../../controllers/Point/readAll-point-controller')
const routes = Router()

routes.post('/user', (request, response) => {
  new CreateUserController().CreateUser(request, response)
})

routes.post('/point', (request, response) => {
  new CreatePointController().CreatePoint(request, response)
})

routes.put('/point', (request, response) => {
  new UpdatePointController().UpdatePoint(request, response)
})

routes.get('/point', (request, response) => {
  new ReadAllPointController().ReadAllPoint(request, response)
})

module.exports = routes
