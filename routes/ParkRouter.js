const Router = require('express').Router()
const controller = require('../controllers/UserController')

// CRUD
Router.get('/', controller.GetUser)
Router.post('/', controller.CreateUser)
Router.put('/:userId', controller.UpdateUser)
Router.delete('/:userId', controller.DeleteUser)

module.exports = Router