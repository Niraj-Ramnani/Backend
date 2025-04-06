const express = require('express');
const userModel = require('./models/user')
const dbConnection = require('./config/db')
const app = express();
app.set("view engine" , "ejs");
app.listen(3000);
