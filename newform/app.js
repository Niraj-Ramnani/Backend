const express = require('express');
const app = express();
app.set("view engine" , "ejs");
// built in middleware 
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.get('/'  ,(req,res)=>{
     res.render('index')
})
app.get('/profile',(req,res)=>{
     res.send("This is a profile page ")
})

// we use post route so our data is hidden in the url 
app.post('/get-form-data',(req,res)=>{
     console.log(req.body)
     res.send('data received ')
})
app.listen(3000);