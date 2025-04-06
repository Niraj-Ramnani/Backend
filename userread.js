const express = require('express');
const userModel = require('./models/user')
const dbConnection = require('./config/db')
const app = express();
app.set("view engine" , "ejs");

app.get('/get-user',(req,res)=>{
     // we can also apply a specific condition to the find 
     userModel.findOne({
          username:'admin'
     }).then((users)=>{
          res.send(users)
          console.log(users);
     })
})
