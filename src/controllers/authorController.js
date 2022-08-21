const { default: mongoose } = require("mongoose")
const AuthorModel = require("../models/authorModel")

const createAuthor = async function (req, res) {
    let book = req.body
    let bookCreated = await AuthorModel.create(book)
    res.send({ data: bookCreated })
}

const authorPresent = async function (req, res) {
    let data = req.body
    let authorId = data.author_id
    if (!authorId) {
        res.send("this detail is required")
    }
    let savedData= await AuthorModel.create(data)
    res.send(savedData)
}

const authorDetailsPresent = async function(req , res){
    if(!mongoose.isValidObjectId()){
        return res.send({status:false,msg:"pls enter vaild id"})
    }
    let author= await AuthorModel.findById()
    if(!author){
        return res.send({status:false,msg:"details not present"})
    }

    }




module.exports.createAuthor = createAuthor
module.exports.authorPresent = authorPresent
module.exports.authorDetailsPresent = authorDetailsPresent
// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }
// module.exports.getAuthorsData= getAuthorsData