//logic to resolve

//import product collection
const products = require('../model/productSchema')


//get all products
exports.getallproducts = async (req, res)=>{
    //logic
    try{
//get all products from collection in mongodb
const allProducts = await products.find()
res.status(200).json(allProducts)//respone send back to the client
    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.viewProducts = async (req, res)=>{
    const id = req.params.id
    try{
        const product = await products.findOne({id})
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(401).json("Product not Found")
        }

    }
    catch(err){
        res.status(401).json(err)
    }

}