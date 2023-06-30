const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/moonController`)


Router.get(`/`, controller.getMoons)
Router.get(`/:name`, controller.getMoonsByName)

module.exports = Router