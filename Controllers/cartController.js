// import cartSchema
const carts =  require('../model/cartSchema')

//add to cart
exports.addtocart = async(req, res)=>{

    //get products details from request
    const { id,title,price,image,quantity} =req.body
    try{

         //check if products is already in cart the update the quantity and price 
         const product = await carts.findOne({id})
         if(product){

            //if product already in cart, increment the quantity
            product.quantity+=1

            //update grand total
            product.grandTotal= product.price*product.quantity

            //save the changes into the db
            product.save()
            res.status(200).json('Item updated') 
         }
         else{
             //else product is not in the cart, then add to cart 
             const newProduct = new carts({id,title,image,price,quantity,grandTotal:price})

             //save new product
            await newProduct.save()

            //response send back
            res.status(200).json('item added successfully')


         }

   
    }
    catch(error){
        res.status(401).json(error)
    }

    //cart getting
   

   
}
exports.getcart= async(req,res)=>{
    try{
        const getProduct =  await carts.find()
        res.status(200).json(getProduct)

    }
    catch(error){
        res.status(401).json(error)
    }
}


//cart delete 
exports.deletecart= async(req, res)=>{

    //remove cart items 
    const {id}=req.params
    try{
        const removecart = await carts.deleteOne({id})
        if(removecart.deleteCount!=0){
            //get all cart items after removing particular cart item
            const remainingcart = await carts.find()
            res.status(200).json(remainingcart)
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

//increment cart

exports.incrementCartItems = async(req, res)=>{
    //get product id from request
    const {id}= req.params
    try{
        //if product is present in the class
        const product=await carts.findOne({id})
        if(product){
            //update the quantity and grand total
            product.quantity+=1
            product.grandTotal=product.quantity*product.price
            //save changes to the db
            await product.save()

            //updated details send back to the client
            const getProduct =  await carts.find()
            res.status(200).json(getProduct)


        }
        else{
            res.status(404).json('product not found')
        }

    }

    
    catch(error){
        res.status(401).json(error)
    }
}

//decrement cart

exports.decrementCartItems = async(req, res)=>{
    //get product id from request
    const {id}= req.params
    try{
        //if product is present in the class
        const product=await carts.findOne({id})
        if(product){
            //update the quantity and grand total
            product.quantity-=1
            product.grandTotal=product.quantity*product.price
            //save changes to the db
            await product.save()

            //updated details send back to the client
            const getProduct =  await carts.find()
            res.status(200).json(getProduct)


        }
        else{
            res.status(404).json('product not found')
        }

    }

    
    catch(error){
        res.status(401).json(error)
    }
}