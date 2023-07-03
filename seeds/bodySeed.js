const db = require(`../db`)
const { Body } = require(`../models`)
db.on(`error`, console.error.bind(console,`MongoDB connction error`))

const main = async () => {
    const bodies = [
        {
            name : `The Sun`,
            mass :`1.9891 x 10^30 kg`,
            dist_from_sun :`0 m`,
            terrain :`Gas and Plasma`,
            surface_Temperature :`5,600°C`,
            gravity :`274 m/s²`

        }
    ]


    await Body.insertMany(bodies)
 }

 const run=async()=>{
    await main()
    db.close
 }

 run()