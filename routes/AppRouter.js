const express = require('express')
const Router = express.Router()
const PlanetRouter = require(`./planetsRouter.js`)

Router.use(`/planets`, PlanetRouter)

module.exports = Router