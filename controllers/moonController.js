const { Moon } = require (`../models`)
const moonSchema = require (`../models/moon`)



const getMoons = async (req, res) =>{
const moon = await Moon.find({})
res.json(moon)
}


const getMoonsByName = async (req, res) => {
    const { name } = req.params
    const moon = await Moon.findOne({name:name})
    if(!moon) throw Error(` Moon not found! `)
    res.json(moon)
}




module.exports = {
    getMoons, getMoonsByName
}