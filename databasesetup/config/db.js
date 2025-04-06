const mongoose = require('mongoose')
// connect method make connection and also returns it 
const connections = mongoose.connect('mongodb://0.0.0.0/men').then(()=>{
     console.log("connected to database ")
})

module.exports = connections