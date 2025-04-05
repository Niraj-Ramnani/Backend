const express = require('express');
const app = express();

app.set("view engine" , 'ejs');

// custom middleware 
app.use((req,res,next)=>{
     console.log("This is a middleware")
     const a = 5;
     const b = 6;
     console.log(a +b);
     return next();
})
app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/profile',(req,res)=>{
     res.send("This is a profile page ")
})

app.listen(3000);
