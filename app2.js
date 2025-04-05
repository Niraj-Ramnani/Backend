const express = require('express');
const app = express();
//created a deafault route 
app.get('/',(req,res)=>{
     res.send("hello world")
});
app.get('/profile',(req,res)=>{
     res.send("This is a profile page ")
})
// express create the server internally 
app.listen(3000);
