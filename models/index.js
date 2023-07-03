const { model } = require('mongoose')
const PlanetSchema = require('./planet')
const MoonSchema = require('./moon')
const BodySchema = require(`./body`)

const Planet = model('Planet', PlanetSchema)
const Moon = model('Moon', MoonSchema)
const Body = model(`Body`, BodySchema)

module.exports = {
    Planet, Moon, Body
}