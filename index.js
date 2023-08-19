//1 to automatically load .env into your application
require('dotenv').config()//loads .env file contents into process .env by defaut

//2 import express
const express = require('express');

//6 import cors
const cors = require('cors');

//8 import db connection
require('./DB/connection')

//import router
const router = require('./Routes/router')

//3 create server appication
const server = express()

//7 use server
server.use(cors())
server.use(express.json())
server.use(router)

//5 define port 
const PORT = 5000

//4  run app
server.listen(PORT,()=>{
    console.log('server listening on the port' + PORT);
})

//route - localhost:5000
server.get('/',(req, res)=>{
    res.status(200).json('E-Cart server is started')
})



