const express = require('express');
const userModel = require('./models/user')
const dbConnection = require('./config/db')
const app = express();
app.set("view engine" , "ejs");
// built in middleware 
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.get('/'  ,(req,res)=>{
     res.render('index')
})



app.get('/register',(req,res)=>{
     res.render('register')
})

// this code is asynchronous 
app.post('/register', async (req,res)=>{
     console.log(req.body);
     //deep structuring 

     const {username , email , password } = req.body;
    const newuser =  await userModel.create({
          username:username,
          email:email,
          password:password,
     })
     res.send("user registerd  " +newuser)
     
})
app.listen(3000);
