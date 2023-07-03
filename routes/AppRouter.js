const express = require('express')
const Router = express.Router()
const PlanetRouter = require(`./planetsRouter.js`)
const MoonRouter = require(`./moonsRouter.js`)
const BodyRouter = require(`./bodiesRouter.js`)

Router.use(`/planets`, PlanetRouter)
Router.use(`/moons` , MoonRouter)
Routeer.use(`/boides`,BodyRouter )

module.exports = Router