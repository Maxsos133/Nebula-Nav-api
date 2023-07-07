const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/commentController`)

Router.get(`/`, controller.getComments)
Router.get(`/:id`, controller.getCommentsById)
Router.post('/', controller.createComment)
Router.delete('/:id', controller.deleteComment)
Router.put('/:id', controller.updateComment)

module.exports = Router