const cUserModel = require("../models/cUserModel")

const createUser= async function (req, res) {

    let data= req.body
    // let isFreeApp = req.headers.isfreeappuser
    // let nisha=req.body.isFreeApp
    let savedData= await cUserModel.create(req.body)
    // res.send({msg: savedData})
    // console.log(req.headers)
    let user =req.headers.isfreeappuser
    if(!user){
        res.send(" The request is missing a mandatory")
    }else{
       
        console.log(user)
         res.send(user)
    }
    console.log(req.headers.isfreeappuser)
    console.log(req.headers)
    
}
module.exports.createUser = createUser
