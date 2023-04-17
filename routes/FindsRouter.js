const Router = require('express').Router()
const controller = require('../controllers/FindsController.js')

Router.get('/', controller.GetAllFinds);
Router.get('/:findId', controller.GetFindDetails);
Router.post('/:userId', controller.CreateFind);
Router.put('/:findId', controller.UpdateFind);
Router.delete('/:findId', controller.DeleteFind);

module.exports = Router

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP   