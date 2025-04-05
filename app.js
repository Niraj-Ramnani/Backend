// creating a server using http and creating routes for the pages 
const http = require('http');
const server = http.createServer((req,res)=>{
     if(req.url== "/about"){
          res.end("The about page ");
     }
     if(req.url== "/dashboard"){
          res.end("The dashboard page ");
     }
     if(req.url=="/"){
          res.end("The home page and the main page ");
     }
     console.log(req.url);
});

server.listen(3000)
