const Router = require('express').Router()

const UserRouter = require('./UserRouter.js')
const ParkRouter = require('./ParkRouter.js')
const FindsRouter = require('./FindsRouter.js')

Router.use('/users', UserRouter)
Router.use('/parks', ParkRouter)
Router.use('/finds', FindsRouter)

module.exports = Router


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP    
