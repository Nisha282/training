const cProductModel = require("../models/cProductModel")

const createProduct= async function (req, res) {
    let data= req.body

    let savedData= await cProductModel.create(data)
    res.send({msg: savedData})
}
module.exports.createProduct = createProduct
