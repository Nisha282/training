const { count } = require("console")
const NovelModel= require("../models/novelModel")

const createBook = async function (req, res) {
    let data= req.body

    let savedData= await NovelModel.create(data)
    res.send({msg: savedData})
}

const bookList = async function (req, res){
     let data = await NovelModel.find().select({ bookName : 1 , authorName : 1 ,  _id:0})
     res.send({msg : data})

}

const bookInYear = async function(req , res){
    let year = req.body.year
    let data = await NovelModel.find({year})
    res.send({msg : data})
}

const particularBooks = async function(req , res){
    let obj=req.body;
    let data=await NovelModel.find(obj);
    res.send({data:data});
}


const randomBooks = async function(req , res){
    let randomBooks = await NovelModel.find({ totalPages: { $gt:  500 }})
        res.send({msg : randomBooks})
        
}
 const XINRBooks = async function(req, res){
    let XINRBooks = await NovelModel.find({$or:[{"prices.indianPrice":"100INR"},
    {"prices.indianPrice":{$eq:"200INR"}},{"prices.indianPrice":{$eq:"500INR"}}]})
    res.send({msg : XINRBooks})
 }




module.exports.createBook = createBook
module.exports.bookList = bookList 
module.exports.bookInYear = bookInYear
module.exports.particularBooks = particularBooks
module.exports.randomBooks = randomBooks
module.exports.XINRBooks = XINRBooks