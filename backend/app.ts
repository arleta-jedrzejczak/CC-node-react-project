const express = require('express');
const app = express();
const mongoose=require('mongoose')
const parser=require('body-parser')
require('dotenv/config')

mongoose.connect(process.env.DB_CONNECTION,  {useNewUrlParser: true, useUnifiedTopology: true}, ()=>console.log('connected'))

app.use(parser.json())

const usersRouter=require('./routes/users')

app.use('/users', usersRouter)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
  next();
});

app.use((req, res, next) => {
  res.send('Working!');
});

module.exports = app;