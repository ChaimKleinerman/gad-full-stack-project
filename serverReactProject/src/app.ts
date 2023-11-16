//m//import library
import mongoose from "mongoose";
import express from "express";
import { router } from "./routs.js";
import morgan from "morgan";
import cors from "cors"
import { authenticationToken } from "./authentication.js";

//create connection to mongoDb
export async function connectToDb(){
    await mongoose.connect("mongodb+srv://chaim:1234@cluster0.tbqoqjo.mongodb.net/store?retryWrites=true&w=majority")
//    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerceData")
}
//middlewares
const app = express();
app.use(cors())
app.use(morgan("combined"));
app.use(express.json());
app.use("/api",router);


//creating the server
app.listen(3000, () => {
    console.log("server is running");
});






