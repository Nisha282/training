const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let book = req.body
    let bookCreated = await publisherModel.create(book)
    res.send({data: bookCreated})
}

const publisherPresent = async function (req, res) {
    let data = req.body
    let publisherId = data.publisher_id
    if (!publisherId) {
        res.send("this detail is required")
    }
    let savedData= await publisherModel.create(data)
    res.send(savedData)

}

const publisherDetailsPresent = async function(req , res){
    if(!mongoose.isValidObjectId()){
        return res.send({status:false,msg:"pls enter vaild id"})
    }
    let publisher= await publisherModel.findById()
    if(!publisher){
        return res.send({status:false,msg:"details not present"})
    }

    }

module.exports.createPublisher = createPublisher
module.exports.publisherPresent = publisherPresent
module.exports.publisherDetailsPresent =publisherDetailsPresent