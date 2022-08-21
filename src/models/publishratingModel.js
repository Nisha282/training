const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    name: String,
    publisher: String,
    rating : Number ,
    price : Number,
    isHardCover : {
        type : Boolean,
        default : false
    }
    

}, { timestamps: true });

module.exports = mongoose.model('nishaPublisher', publisherSchema)
