const Router = require('express').Router()
const controller = require('../controllers/ParkController.js')

Router.get('/', controller.GetAllParks)
Router.get('/:parkId', controller.GetParkDetails);
Router.post('/', controller.CreatePark)
Router.put('/:parkId', controller.UpdatePark)
Router.delete('/:parkId', controller.DeletePark)

module.exports = Router

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP   