const { Router } = require('express')
const CreateUserController = require('../../controllers/User/create-user-controller')

const routes = Router()

routes.post('/user', (request, response) => {
  new CreateUserController().CreateUser(request, response)
})

module.exports = routes
