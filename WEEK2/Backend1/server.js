// create HTPP server 
import exp from 'express'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
const app=exp();

// use body parse middleware
app.use(exp.json());// if we dont write this we cant handle post and put ops cuz they have req body
// the above middleware is builtin 

//Custome MIDDLEWARE

// function middleware1(req,res,next){
//     // we can do three things here
//     //1 send response directly to the client
//  //res.json({message:"THis is from middleware 1"});// so when this middle ware 1 is used api route ki vellakunda response client ki reach aipothadi
//     //3 if next() is commented and this fn is called the client will stay in infinite waiting loop   
//    console.log("from middleware")
//  // 2 forward to the next middleware or route
//     next();

// }

// app.use(middleware1);
// ala we can have n middlewares 
// forward request to UserApi if path starts with /user-api

app.use('/user-api',userApp);

// forward request to ProductApi if path starts with /product-api
app.use('/product-api',productApp);

//set a port number
const port=3000;
// assign port number to http server
app.listen(port,()=>console.log(`server listening to port ${port}.....!!`));