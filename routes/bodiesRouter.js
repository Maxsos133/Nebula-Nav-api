const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/bodiesController`)


Router.get(`/`, controller.getBodies)
Router.get(`/:name`, controller.getBodiesByName)

module.exports = Router