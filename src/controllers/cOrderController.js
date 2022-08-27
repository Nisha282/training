const cOrderModel = require("../models/cOrderModel")
const cUserModel = require("../models/cUserModel")
const cProductModel = require("../models/cProductModel")

//  create the order .......
const createOrder = async function (req, res) {
    let data= req.body
    let savedData= await cOrderModel.create(data)
    res.send({msg: savedData})
}
//  checking id is present or not !!!......
const validateId = async function(req , res){
let data = req.body
let userid = req.body.user_id
let productid = req.body.product_id
if(!userid && !productid)
return res.send({msg : "This field is mandatory !!!"})
else if(!userid){
    return res.send({msg: "User Id is madatory !!"})
}
 else if(!productid){
    return res.send({msg : "product Id is mandatory!!"})
 }
//  let saveddata = await cOrderModel.create(data)
//  res.send(saveddata)

// check isFreeAppUser is true ......
let isFreeAppUser=req.headers.isfreeappuser
console.log(isFreeAppUser)
if(isFreeAppUser=="true"){
    let data=req.body
    data["amount"]=0
    let free=await cOrderModel.create(data)
    console.log(free)
    res.send(free)
}

//  check isFreeAppUser is false pr not true ......
else if(isFreeAppUser !== "true"){
    let userMoney = await cUserModel.findById(userid).select({balance:1 , _id:0})
    let productMoney = await cProductModel.findById(productid).select({price:1 , _id:0})
    let userBalance = userMoney.balance
    let ProductBalance = productMoney.price

    //checking if balance is present or not 
    if(userBalance >= ProductBalance){
        let newUserBalance = userBalance - ProductBalance
        console.log(newUserBalance)
        let updatedData = await cUserModel.findByIdAndUpdate({_id : userid}, {$set : {balance: newUserBalance}} ) 
        console.log(updatedData)
        // return res.send({msg : updatedData})
        let data=req.body
        data["amount"]=ProductBalance
        data["isFreeAppUser"]=false

        let free=await cOrderModel.create(data)
        res.send(free)

    }else{
        res.send({msg: "Insufficint Balance"})
    }
}
}


module.exports.createOrder = createOrder
module.exports.validateId = validateId
