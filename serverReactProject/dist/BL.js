//modules
import { dal_allData, dal_dataById, dal_dataByCategory, dal_allCategories, dal_insertUser, dal_login, dal_addToCart, dal_getCart } from "./dal.js";
import { Err } from "./types.js";
import jwt from "jsonwebtoken";
//get all products
async function bl_allData() {
    const dataJson = await dal_allData();
    if (!(dataJson instanceof Error))
        return dataJson;
}
//get product by id
async function bl_dataById(req) {
    let { id } = req.params;
    if (!id) {
        throw new Err(422, "didn't get id! this is what i got " + id);
    }
    const dataJson = await dal_dataById(req.params.id);
    if (!(dataJson instanceof Error))
        return dataJson;
}
//get all categories
async function bl_allCategories() {
    const categories = await dal_allCategories();
    if (!(categories instanceof Error))
        return categories;
}
//get product by category
async function bl_dataByCategory(req) {
    const category = req.body.category;
    if (!category) {
        // console.log(3,category);
        throw new Err(422, "didn't get category! this is what i got " + category);
    }
    const dal_respond = await dal_dataByCategory(category);
    // console.log(2,category);
    return dal_respond;
}
//register user
async function bl_insertUser(req) {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    if (!userEmail)
        throw new Err(400, "didn't get user email");
    if (!userPassword)
        throw new Err(400, "didn't get user password");
    const dal_respond = await dal_insertUser(userEmail, userPassword);
    return dal_respond;
}
//user login
const bl_login = async (req) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    if (!userEmail)
        throw new Err(400, "didn't get user email");
    if (!userPassword)
        throw new Err(400, "didn't get user password");
    const dal_respond = await dal_login(userEmail, userPassword);
    if (dal_respond) {
        if (!process.env.ACCESS_TOKEN_SECRET)
            throw new Err(500, "problem with getting token");
        const accessToken = jwt.sign(userPassword, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
        return accessToken;
    }
};
//add to cart
const bl_addToCart = async (req) => {
    const user_email = req.body.user_id;
    const product_id = req.body.product_id;
    const action = req.body.action;
    if (!user_email)
        throw new Err(400, "didn't get user id");
    if (!product_id)
        throw new Err(400, "didn't get product id");
    const dal_respond = await dal_addToCart(user_email, product_id);
    return dal_respond;
};
//get cart
const bl_getCart = async (req) => {
    const user_id = req.body.user_id;
    if (!user_id)
        throw new Err(400, "didn't get user id");
    const dal_respond = await dal_getCart(user_id);
    return dal_respond;
};
export { bl_allData, bl_dataById, bl_dataByCategory, bl_allCategories, bl_insertUser, bl_login, bl_addToCart, bl_getCart };
