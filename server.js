var express=require('express');
var app=express();
var bodyParesr=require('body-parser');
var cors=require('cors');
app.use(cors());
app.use(bodyParesr.json());
app.use(bodyParesr.urlencoded({extended:true}));
var authuser=require('./routes/authuser');
app.use('/api/users',authuser)


app.listen(5000,()=>{
    console.log('server is started');
})
