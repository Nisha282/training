const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
     firstName: String,
     lastName: String,
     mobile: {
          type: String,
          unique: true,
          require: true
     },
     emailId: String,
     gender: {
          type: String,
          enum: ["male", "female", "LGBTQ"]
     },
     age: Number,
     isIndian : Boolean,
     parentsInfo : {
          motherName : String,
          fatherName: String,
          siblingName : String
     },
     cars:  [String]
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema) //users


// string , number
// boolean , object/json , array 