const { Schema } = require('mongoose')

const moonSchema = new Schema (
    {
        name: { type: String, required: true},
        mass: { type: String, required: true},
        diameter: { type: String, required: true},
        dist_from_planet: { type: String, required: true},
        has_water: { type: String, required: true},
        surface_temperature: { type: String, required: true},
        gravity: { type: String, required: true},
        velocity: { type: String, required: true},
        home_planet: {type: String, required: true },
        image: { type: String, required: true},
    },
    { timestamps: true }
)

module.exports = moonSchema