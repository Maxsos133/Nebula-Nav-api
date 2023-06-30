const db = require("../db")
const { Moon } = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))


const main = async () => {
    const moons = [
        {
            name:``,
            mass:``,
            diameter:``,
            dist_from_planet:``,
            has_water:``,
            surface_temperature:``,
            gravity:``,
            velocity:``,
            //home_planet:``
        }

    ]


    await Moon.insertMany(moons)

}

const run =  async() =>{
    await main()
    db.close
}
run()