const { model } = require('mongoose')
const PlanetSchema = require('./planet')
const MoonSchema = require('./moon')

const Planet = model('Planet', PlanetSchema)
const Moon = model('Moon', MoonSchema)

module.exports = {
    Planet, Moon
}