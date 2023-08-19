//import mongoose
const mongoose =require('mongoose')

//define schema for products collection to store data
           const productsSchema = new mongoose.Schema({
         id:{
             type:Number,
             required:true,
             unique:true
            },
         title:{
               type:String,
               required:true
            },
        price:{
               type:Number,
               required:true
            },
         description:{
                     type:String,
                    required:true,
             },
         category:{
                 type:String,
                 required:true
              },
         rating:{
                rate:{
                     type:Number,
                     required:true
                     },
                 count:{
                    type:Number,
                   required:true
                  }
                }
            })

// create a modele to store products details
const products = new mongoose.model('products',productsSchema)

//export model
module.exports = products