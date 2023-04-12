const Router = require('express').Router()
const controller = require('../controllers/ParkController.js')

Router.get('/', controller.GetPark)
Router.post('/', controller.CreatePark)
Router.put('/:parkId', controller.UpdatePark)
Router.delete('/:parkId', controller.DeletePark)

module.exports = Router

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP   