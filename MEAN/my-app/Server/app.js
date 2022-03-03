const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
const Post = require('../models/post')

mongoose.connect('mongodb://127.0.0.1:27017/myMessages')
.then(()=>{
  console.log('connected to db!');
}).catch(()=>{
  console.log('connection to dn failed...');
})
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH, OPTIONS')
  next();
})

app.post('/posts',(req,res,next)=>{
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
// const post = req.body;
res.status(201).json({
  message:'post added successfully'
});
})
app.use('/',(req,res,next)=>{
  const posts=[
   {
     id:'sdf3asd4',
      title:'1st',
      content:'coming from server'
    },
    {
      id:'jh345k',
      title:'2nd',
       content:'2nd coming from server'
     }
  ]
  return res.status(200).json(
    {
      message: 'posts sent succesfully!',
      posts:posts
    }
  )
});



module.exports = app;
