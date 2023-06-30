const { model } = require('mongoose')
const PlanetSchema = require('./planet')

const Planet = model('Planet', PlanetSchema)

module.exports = {
    Planet,
}