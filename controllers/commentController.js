const { Comment } = require(`../models`)
const commentSchema = require(`../models/comment`)

const getComments = async (req, res) => {
    const comment = await Comment.find({})
    res.json(comment)
}



const getCommentsById = async (req, res) => {
    try {
        const { id } = req.params
        const comment = await Comment.findById(id)
        if(!comment) throw Error(`comment not found`)
        res.json(comment)
    } catch (e){
        console.log(e)
        res.send(`comment not found`)
    }
}

const createComment = async (req, res) => {
    try {
        const { sender, content, object } = req.body
        const comment = new Comment({
            sender,
            content,
            object
        })
        await comment.save()
        res.status(201).json(comment)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'failed to create comment'})
    }
}

module.exports = {
    getComments,
    getCommentsById,
    createComment
}