// create mini express appln
import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
export const productApp = exp.Router();

// Routes
// create a product
productApp.post('/products',async(req,res)=>{
    const newProduct=req.body;
    // create document for the product
    const productDocument = new ProductModel(newProduct);
    // save the product
    const productObj=await productDocument.save();
    //send res
    res.status(201).json({message:"Product created"});
})

// read all products
productApp.get('/products',async(req,res)=>{
    // get the list of products
    const productList= await ProductModel.find();
    // if products does not exist
    if(!productList)
        return res.status(404).json({message:"No products"})
    // send res
    res.status(200).json({message:"All products",payload:productList})
})

// read a product by productid
productApp.get('/products/:id',async(req,res)=>{
    // get id from the request
    const id= Number(req.params.id)
    // find product
    const product=await ProductModel.findOne({productId:id})
    if(!product)
        return res.status(404).json({message:"No product found"})
    // send res
    res.status(200).json({message:"product by id",payload:product})
})

// update a product
productApp.put('/products',async(req,res)=>{
    // get the modified product details
    const modifiedProduct = req.body;
    // find the product by product id
    const product = await ProductModel.findOneAndUpdate({productId:modifiedProduct.productId},{...modifiedProduct},{new:true,runValidators:true})
    // send res
    if(!product){
        return res.status(404).json({message:"No products"})
    }
    res.status(200).json({message:"Product Updated",payload:product})
    
})

// delete a product by productid
productApp.delete('/products/:id',async(req,res)=>{
    // get url id
    const id=Number(req.params.id);
    // find and delete the product
    const productObj= await ProductModel.findOneAndDelete({productId:id});
    // send res
    if(! productObj){
        return res.status(404).json({message:"Product not found"})
    }
    res.status(200).json({message:"Deleted the product ",payload:productObj})
})