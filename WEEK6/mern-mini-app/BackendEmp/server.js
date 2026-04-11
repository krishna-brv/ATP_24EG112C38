import exp from 'express'
import { empApp } from './APIs/EmployeeAPI.js';
import {connect} from 'mongoose'
import cors from 'cors'
const app=exp()

app.use(cors({
    origin:['http://localhost:5173'],
}))
app.use(exp.json())

app.use('/emp-api',empApp)


async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/myDatabase");
        console.log("DB connection success")
        // start server
        const port =5000
        app.listen(port,()=>console.log("server started on 5000 port"))

    }
    catch(err){
        console.log("error occured while connecting to dbase",err);
        
    }
}
connectDB();


//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});