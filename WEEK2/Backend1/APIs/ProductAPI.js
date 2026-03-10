// Create mini-express app(Seperate route)
import exp from 'express'
export const productApp=exp.Router()


    //Test data
    let products=[];
    //Read all products

    productApp.get('/products',(req,res)=>{
        // send response of all products
        res.json({message:"All Products",payload:products})
    })

    //Read all Product by brand
    productApp.get('/products/:brand',(req,res)=>{
        // get brand from the url
        let brandFromUrl=req.params.brand;
        // check for brand
        let product=products.find((productObj)=>productObj.brand===brandFromUrl);
        if(product===undefined)
            return res.json({message:"Product not found"});
        //send res
        res.json({message:`Product details`,payload:product})
    })

    //Create new Product (productId,name,brand,price)
    productApp.post('/products',(req,res)=>{
        // get details of prodcut from the client
        let product=req.body;
        //add the product into ur product array
        products.push(product);
        //send res
        res.json({message:"Product created"});
    })

    //Update a product 
    productApp.put('/products',(req,res)=>{
        // get modifiedd data from user
        let modifiedProduct=req.body;
        //get inded of existing product in product array
        let index= products.findIndex((productObj)=>productObj.productId===modifiedProduct.productId);
        //if index not found(user not there)
        if(index===-1){
            return res.json({message:"Product not found"});
        }
        //Update the user in the array
        products.splice(index,1,modifiedProduct);
        //response to the client
        res.json({message:"The Product's data is updated"});
    })

    //delete a product by id
    productApp.delete('/products/:id',(req,res)=>{
        // get id of product from the url
        let idFromUrl=Number(req.params.id);
        // find index of the product
        let index=products.findIndex((productObj)=>productObj.productId===idFromUrl);
        //delete the product
        if(index===-1){
            return res.json({message:"Product not found"});
        }
        products.splice(index,1);
        //send res
        res.json({message:"Product deleted"});

    })