const { Router } = require('express')
const CreateUserController = require('../../controllers/User/create-user-controller')
const loginController = require ('../../controllers/user/Login-controller')
const routes = Router()

routes.post('/user', (request, response) => {
  new CreateUserController().CreateUser(request, response)
})
routes.post('/login', (request, response) => {
  new loginController().Login(request, response)
})

module.exports = routes
