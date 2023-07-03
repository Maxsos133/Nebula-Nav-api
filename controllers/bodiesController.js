const { Body } = require (`../models`)
const bodySchema = require (`../models/body`)



const getBodies = async (req, res) =>{
const body = await Body.find({})
res.json(body)
}


const getBodiesByName = async (req, res) => {
    const { name } = req.params
    const body = await Body.findOne({name:name})
    if(!body) throw Error(` Body not found! `)
    res.json(body)
}




module.exports = {
    getBodies, getBodiesByName
}