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

module.exports = {
    getComments,
    getCommentsById
}