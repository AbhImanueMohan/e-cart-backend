
//import wishlist schema


const wishlists = require('../model/wishlistSchema')

// logic for wishlist
// get all products from wishlist
exports.addtowishlist = async(req, res)=>{
    //get specific product details from the request


    //before destructuring
    // req.body={
    //     "id":"sjfns",
    //     "price":"bh",
    //     "title":"hjh",
    //     "image":"hvjhkn"
    // }
    //js destructuring property :- 

 const{id,title,price,image} = req.body
 try{
//check if the product is already in wishlist

const item = await wishlists.findOne({id})
if(item){
    res.status(401).json("already exist")
}
else{
    //product is added to the wishlist
    const newProduct = await wishlists({id,title,price,image})
    //to store in db
    await newProduct.save()
    res.status(200).json("Item added to the wishlist")
}
 }
 catch(error){
    res.status(401).json(error)
 }
}

//wishlist getting
exports.getwishlist=async(req,res)=>{
    try{
        const getProduct =  await wishlists.find()
        res.status(200).json(getProduct)
       
    }
    catch(error){
        res.status(404).json(error)
    }
}

//delete wishlist products from db
exports.deletewishlist= async(req, res)=>{

    //get particular product id
    const {id}=req.params
    try{
        const removewishlist = await wishlists.deleteOne({id})
        if(removewishlist){
            //get al wishlist product after removing particular product
            const remainingwishlist = await wishlists.find()
            res.status(200).json(remainingwishlist)
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}