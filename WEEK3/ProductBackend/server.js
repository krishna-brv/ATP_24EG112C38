// create express app
import exp from 'express'
import {connect} from 'mongoose'

import { productApp } from './APIs/ProductAPI.js';

const app =exp()
//add bidy parser
app.use(exp.json())

// forward to produuct app
app.use('/product-api',productApp);
//connect to DB server
// import connect method from mongoose
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/myDbase");
        console.log("DB connection success")
        // start server
        const port =3000
        app.listen(port,()=>console.log("server started on 3000 port"))

    }
    catch(err){
        console.log("error occured while connecting to dbase",err);
        
    }
}
connectDB();

