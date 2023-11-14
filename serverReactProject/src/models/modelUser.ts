//modules
import mongoose from "mongoose";
const {Schema,model}  = mongoose

const userSchema = new Schema(
    {
       email:String,
       password:String,
       cart:Number

    }
)

const UserModel = mongoose.model("users",userSchema)
export {UserModel}