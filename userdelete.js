const express = require('express');
const userModel = require('./models/user')
const dbConnection = require('./config/db')
const app = express();
app.set("view engine" , "ejs");
app.get('/delete-user',async (req,res)=>{
     await userModel.findOneAndDelete({
          username:"new2"
     })
     res.send("user deleted");
})

app.listen(3000);
