const express = require('express');
const morgan = require('morgan');
const app = express();
// all the middle wares works by default for all the created routes 
app.use(morgan('dev'))
app.set("view engine" , "ejs");
app.get('/' , (req,res,next)=>{
     console.log("This custom middle ware work only for the / route ")
     return next();
     // pass the control to the next code 
} ,(req,res)=>{
     res.send("home page")
})
app.get('/profile',(req,res)=>{
     res.send("This is a profile page ")
})
app.listen(3000);
