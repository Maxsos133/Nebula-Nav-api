const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    sender: { type: String, required: true},
    content: { type: String, required: true},
    object: { type: Schema.Types.ObjectId, ref: 'Object'},
  },
  { timestamps: true }
)

module.exports = commentSchema