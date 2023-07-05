const { model } = require('mongoose')
const PlanetSchema = require('./planet')
const MoonSchema = require('./moon')
const BodySchema = require(`./body`)
const CommentSchema = require(`./comment`)

const Planet = model('Planet', PlanetSchema)
const Moon = model('Moon', MoonSchema)
const Body = model(`Body`, BodySchema)
const Comment = model(`Comment`, CommentSchema)

module.exports = {
    Planet, Moon, Body, Comment
}