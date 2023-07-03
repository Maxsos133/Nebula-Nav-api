const { Schema } = require(`mongoose`)
const bodySchema = new Schema(
    {
    name: { type: String, required: true },
    mass: { type: String, required: true },
    dist_from_sun: {type: String, required: true },
    terrain: { type: String, required: true},
    surface_Temperature: { type: String, required: true},
    gravity: { type: String, required: true}
    },
    {timestamps: true}
)

module.exports = bodySchema