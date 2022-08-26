const cOrderModel = require("../models/cOrderModel")
const createOrder= async function (req, res) {
    let data= req.body

    let savedData= await cOrderModel.create(data)
    res.send({msg: savedData})
}
module.exports.createOrder = createOrder
