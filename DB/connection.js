// node atlas connection here

//import mongoose

const mongoose = require('mongoose');

const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
    console.log('Database connection established.........................................');
})
.catch((err)=>{
console.log(err);
})