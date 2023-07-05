const express = require('express')
const Router = express.Router()
const PlanetRouter = require(`./planetsRouter.js`)
const MoonRouter = require(`./moonsRouter.js`)
const BodyRouter = require(`./bodiesRouter.js`)
const CommentRouter = require(`./commentsRouter.js`)

Router.use(`/planets`, PlanetRouter)
Router.use(`/moons` , MoonRouter)
Router.use(`/bodies`,BodyRouter )
Router.use (`/comments`, CommentRouter)

module.exports = Router