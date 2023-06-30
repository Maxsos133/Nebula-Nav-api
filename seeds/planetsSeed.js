const db = require("../db")
const { Planet } = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const planets = [
    {
        name: `Sun`,
        mass: `1.989 x 10^30 kg`,
        diameter: `test`,
        dist_from_sun: `test`,
        location: `test`,
        terrain: `test`,
        has_water: `test`,
        has_aliens: `test`,
        surface_temperature: `test`,
        gravity: `test`,
        velocity: `test`,
        moons: [
            `test`
        ]
    }
  ]
  await Planet.insertMany(planets);
  console.log(`Created planets!`);
}

const run = async () => {
  await main()
  db.close()
}

run()
