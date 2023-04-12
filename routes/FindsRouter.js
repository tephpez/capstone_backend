const Router = require('express').Router()
const controller = require('../controllers/FindsController')

Router.get('/', controller.GetAllFinds)
Router.get('/view/:find_id', controller.GetFinds)
Router.post('/:user_id', controller.CreateFinds)
Router.put('/:find_id', controller.UpdateFinds)
Router.delete('/:find_id', controller.DeleteFinds)

module.exports = Router