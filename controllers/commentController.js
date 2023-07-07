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

const deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      const comment = await Comment.findById(id)
  
      if (!comment) {
        throw Error('comment not found')
      }
  
      await comment.deleteOne();
      res.json({ message: 'comment deleted successfully' })
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'failed to delete comment' })
    }
  }

  const updateComment = async (req, res) => {
    try {
      const { id } = req.params
      const { content } = req.body
  
      const comment = await Comment.findByIdAndUpdate(id, { content }, { new: true })
      if (!comment) throw Error('Comment not found')
      res.json(comment)
    } catch (error) {
      console.log(error)
      res.status(404).send('Comment not found')
    }
  }

module.exports = {
    getComments,
    getCommentsById,
    createComment,
    deleteComment,
    updateComment
}