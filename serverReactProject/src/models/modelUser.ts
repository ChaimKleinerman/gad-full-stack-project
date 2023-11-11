//modules
import mongoose from "mongoose";
const {Schema,model}  = mongoose

const userSchema = new Schema(
    {
       email:String,
       password:String
    }
)

const UserModel = mongoose.model("users",userSchema)
export {UserModel}