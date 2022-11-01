const mongoose = require('mongoose');
const User_schema = new mongoose.Schema({
    name:{require:true,type:String},
    email:{require:true,type:String},
    password:{require:true,type:String},
    reEnterPassword:{require:true,type:String},

})
module.exports = mongoose.model("USER",User_schema)