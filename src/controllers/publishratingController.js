const publishratingModel = require("../models/publishratingModel")


const publisherRating = async function (req, res) {
    let book = req.body
    let bookCreated = await publishratingModel.create(book)
    res.send({data: bookCreated})
}

const getpublishdata = async function (req, res){
    let allBooks= await publishratingModel.updateMany( { rating: {$gt: 3.5}},{ $inc: { price: 10 }})
    res.send({data: allBooks})

}


const updateTrue = async function (req , res){
    let allBooks= await publishratingModel.find( { 
            $or: [ { publisher: "Penguin" } , {publisher : "HarperCollins"} ] }).updateMany({isHardCover: true})
    res.send({data: allBooks})
    } 
   
 

module.exports.publisherRating = publisherRating
module.exports.getpublishdata= getpublishdata
module.exports.updateTrue = updateTrue
