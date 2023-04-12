const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const ParkRouter = require('./ParkRouter')
const FindsRouter = require('./FindsRouter')

Router.use('/users', UserRouter)
Router.use('/parks', ParkRouter)
Router.use('/finds', FindsRouter)

module.exports = Router