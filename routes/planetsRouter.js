const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/planetController`)

Router.get(`/`, controller.getPlanets)
Router.get(`/:name`, controller.getPlanetsByName)

module.exports = Router