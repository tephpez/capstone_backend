const Router = require('express').Router()
const controller = require('../controllers/FindsController.js')

Router.get('/', controller.GetAllFinds);
Router.get('/view/:find_id', controller.GetFindDetails);
Router.post('/:user_id', controller.CreateFind);
Router.put('/:find_id', controller.UpdateFind);
Router.delete('/:find_id', controller.DeleteFind);

module.exports = Router

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP   