const express = require('express');
const userModel = require('./models/user')
const dbConnection = require('./config/db')
const app = express();
app.set("view engine" , "ejs");

app.get('/update-user',async (req,res)=>{
    await userModel.findOneAndUpdate({
          username:"new2"
     },{
          email:'new2@gmail.com'
     })
     res.send("user updated ")
})
app.listen(3000);
