const Router = require('express').Router()
const controller = require('../controllers/UserController.js')

Router.get('/', controller.GetUser)
Router.post('/', controller.CreateUser)
Router.put('/:userId', controller.UpdateUser)
Router.delete('/:userId', controller.DeleteUser)

module.exports = Router

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP   