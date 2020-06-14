const { Router } = require('express')
const CreateUserController = require('../../controllers/User/create-user-controller')
const CreatePointController = require('../../controllers/Point/create-point-controller')
const UpdatePointController = require('../../controllers/Point/update-point-controller')
const ReadAllPointController = require('../../controllers/Point/readAll-point-controller')
const DeletePointController = require('../../controllers/Point/delete-point-controller')
const LoginController = require('../../controllers/user/Login-controller')
const auth = require('../../utils/auth/auth')
const routes = Router()

routes.route('/user')
  .post(auth, (request, response) => {
    new CreateUserController().CreateUser(request, response)
  })

routes.route('/login')
  .post((request, response) => {
    new LoginController().Login(request, response)
  })

routes.route('/point')
  .post(auth, (request, response) => {
    new CreatePointController().CreatePoint(request, response)
  })
  .put(auth, (request, response) => {
    new UpdatePointController().UpdatePoint(request, response)
  })
  .get(auth, (request, response) => {
    new ReadAllPointController().ReadAllPoint(request, response)
  })

routes.route('/point/:pointId')
  .delete(auth, (request, response) => {
    new DeletePointController().DeletePoint(request, response)
  })

module.exports = routes
