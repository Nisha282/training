
const mid1 =function(req,res,next){
    let order=req.headers.isfreeappuser
    if(!order){
        res.send("missing part is mandatory")
    } else {
        next()
    }
}

module.exports.mid1= mid1

