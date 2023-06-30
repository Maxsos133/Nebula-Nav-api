const express = require('express')
const Router = express.Router()
const PlanetRouter = require(`./planetsRouter.js`)
const MoonRouter = require(`./moonsRouter.js`)

Router.use(`/planets`, PlanetRouter)
Router.use( `/moons` , MoonRouter)

module.exports = Router