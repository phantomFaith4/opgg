require('dotenv').config();

const express  = require('express');
const {json} = require('express');
const lolRoute = require('./routes/lol');
const app = express();

app.use(json()); 

app.use('/', lolRoute);


app.listen('8000',()=>{
    console.log("Server is active at port 8000");  
})