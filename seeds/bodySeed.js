const db = require(`../db`)
const { Body } = require(`../models`)
db.on(`error`, console.error.bind(console,`MongoDB connction error`))

const main = async () => {
    const bodies = [
        {
            name: `Sun`,
            mass: `1.989 x 10³⁰ kg`,
            diameter: `1392700 km`,
            dist_from_sun: `0 km`,
            terrain: `gas`,
            surface: `burning plasma hydrogen`,
            surface_temperature: `5600°C`,
            has_water: `no`,
            has_aliens: `possibly`,
            gravity: `274 m/s²`,
            velocity: `720,000 km/h`,
            mapData: {
              coordinates: {
                longitude: `0`,
                latitude: `0`,
              },
            },
            image: `https://imgur.com/8zyuGZw.png`
          },
    ]


    await Body.insertMany(bodies)
 }

 const run=async()=>{
    await main()
    db.close()
 }

 run()