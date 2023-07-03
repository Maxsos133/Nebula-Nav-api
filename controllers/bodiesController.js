const { Body } = require (`../models`)
const bodySchema = require (`../models/body`)

const getBodies= async (req, res) => {
const body = await Body.find({})
res.json(body)
}

const getBodiesByName = async (req, res) => {
    const { name } = req.params
    const body = await Bodies.findOne({name:name})
    if(!body) throw Error(`Celestial body not found`);
}



module.exports = {
    getBodies, getBodiesByName
}