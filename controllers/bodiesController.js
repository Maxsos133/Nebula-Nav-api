const { Body } = require (`../models`)
const bodySchema = require (`../models/body`)



const getBodies = async (req, res) =>{
const body = await Body.find({})
res.json(body)
}


const getBodiesByName = async (req, res) => {
    try {
    const { name } = req.params
    const body = await Body.findOne({name:name})
    if(!body) throw Error(` Celestial body not found! `)
    res.json(body)
    } catch (e) {
        console.log(e)
        res.send("Celestial body not found")
    }
}




module.exports = {
    getBodies, getBodiesByName
}