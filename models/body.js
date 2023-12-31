const { Schema } = require(`mongoose`)
const bodySchema = new Schema(
    {
        name: { type: String, required: true},
        mass: { type: String, required: true},
        diameter: { type: String, required: true},
        dist_from_sun: { type: String, required: true},
        terrain: { type: String, required: true},
        has_water: { type: String, required: true},
        has_aliens: { type: String, required: true},
        surface_temperature: { type: String, required: true},
        gravity: { type: String, required: true},
        velocity: { type: String, required: true},
        image: { type: String, required: true},
        mapData: { type: Object, required: false}
    },
    {timestamps: true}
)

module.exports = bodySchema