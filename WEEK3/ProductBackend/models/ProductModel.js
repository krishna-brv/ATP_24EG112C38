import {Schema,model} from 'mongoose'

const productSchema= new Schema({
    productId:{
        type:Number,
        required:[true,"Id is required"],
        unique:[true,"product id already exists"]
    },
    productName:{
        type:String,
        required:[true,"Product name is mandatory"],
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[10000,"price should be minimum of 10000 rupees"],
        max:[50000,"price should not exceed 50000 rupees"],
    },
    brand:{
        type:String,
        required:[true,"Brand is mandatory"],
    }
},{
    versionKey:false,
    timestamps:true,
});

export const ProductModel = model("product",productSchema);
// the term product is name of the model not ProductModel
