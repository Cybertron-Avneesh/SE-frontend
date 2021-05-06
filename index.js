const express = require('express');
const app = express();
const path = require('path');
const publicDirectory = path.join(__dirname,'/static');

const json = require('body-parser');
const cors = require('cors');

// app.use(json());
app.use(express.json());


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

app.use(express.static(publicDirectory));

app.get('',(req,res)=>{
    res.sendFile(publicDirectory+'/login.html');
})

app.get('/admin',(req,res)=>{
    res.sendFile(publicDirectory+'/sysadmin/index.html');
})
app.get('/operating',(req,res)=>{
    res.sendFile(publicDirectory+'/operating/index.html');
})
app.get('/privileged',(req,res)=>{
    res.sendFile(publicDirectory+'/privileged/index.html');
})



app.listen(4400,()=>{
    console.log("App on port 4400");
})