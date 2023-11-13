import mongoose from "mongoose";
const {Schema,model}  = mongoose

const categorySchema = new Schema(
    {
       name:String,
       timeChosen:Number
    }
)

const CategoryModel = mongoose.model("categories",categorySchema)
export {CategoryModel}