const { Planet } = require(`../models`)
const planetSchema = require(`../models/planet`)

const getPlanets = async (req, res) => {
    const planet = await Planet.find({})
    res.json(planet)
}



const getPlanetsByName = async (req, res) => {
    try {
        const { name } = req.params
        const planet = await Planet.findOne({ name: name})
        if(!planet) throw Error(`planet not found`)
        res.json(planet)
    } catch (e){
        console.log(e)
        res.send(`planet not found`)
    }
}

module.exports = {
    getPlanets,

    getPlanetsByName
}