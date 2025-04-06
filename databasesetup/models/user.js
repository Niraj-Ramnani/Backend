const mongoose = require('mongoose')
// user has these 3 properties and has following types 
const userSchema = new mongoose.Schema({
     username:String,
     age:Number,
     // gender:{
     //      type:String,
     //      enum:['male' , 'female']
     // },
     // email:String,
     // password:String,
})
const userModel = mongoose.model('user',userSchema)
module.exports = userModel