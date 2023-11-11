//modules
import { Product } from "./types.js";
import { connectToDb } from "./app.js";
import {  productModel } from "./models/modelProduct.js";
import { UserModel } from "./models/modelUser.js";
import { Err } from "./types.js";
//connection
connectToDb();

//gat all products
const dal_allData = async () => {
    const data = await productModel.find({}).exec();
    if(!data){throw new Err(500,'the get all been filed')} 
    return data;
};
//get all categories
const dal_allCategories = async () => {
    const categories = await productModel.find({}).select("category").exec();
    if(!categories){throw new Err(500,'the get all categories been filed')}
    return categories;
};
// get data by category
const dal_dataByCategory = async (category: string) => {
    const dataByCategory = await productModel
        .find({ category: category })
        .exec();
        if(!dataByCategory){throw new Err(500,'the get data by category been filed')}
    return dataByCategory;
};

//gat data by id
async function dal_dataById(id: string) {
    const dataById = await productModel.findById(id).exec();
    if (!dataById) {
        throw { code: 42231, massage: "data not found" };
    }
    return dataById;
}



//user register
async function dal_insertUser(email: string, password: string) {
    const newUser =  new UserModel({ email: email, password: password });
   const result = await newUser.save()
   if(!result)
   throw new Err (500,'the insert been felid')
    return 'the user inserted successful'
}
//user login
const dal_login  = async (email: string, password: string)=>{
   const user = UserModel.findOne({email: email, password: password })
   if(!user) throw new Err(400,'user is not exist')
   return 'user exist'

}
//add to cart
const dal_addToCart = async (user_id: string,product_id:string) => {
    const add = await UserModel.findByIdAndUpdate(user_id,{$push:{cart:product_id}})
    if(!add) throw new Err(500,'the add been filed')
    return 'the product added successful'
}
//get cart
const dal_getCart = async (user_id: string) => {
    const cart = await UserModel.findById(user_id).select('cart').exec()
    if(!cart) throw new Err(500,'the get been filed')
    return cart
}


export { dal_allData , dal_dataById,dal_dataByCategory,dal_allCategories,dal_insertUser,dal_login,dal_addToCart,dal_getCart};
