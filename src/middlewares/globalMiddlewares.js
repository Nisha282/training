const user  = function (req, res, next) {
    let currentdate = new Date();
    let ipAddress = req.ip;
    let url = req.originalUrl;
    console.log(currentdate + "," + ipAddress + "," +url )
    next()
}
module.exports.user = user