const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const createOrderSchema = new mongoose.Schema( {
    user_id: {
        type: ObjectId,
        ref: "createUser"
    }, 
    product_id :{
        type : ObjectId ,
        ref : "createProduct"
    },
    
    amount : Number ,
    isFreeAppUser :{
        type : Boolean , 
       default : true
    },
    date : String ,
    
}, { timestamps: true });

module.exports = mongoose.model('createOrder', createOrderSchema) //users