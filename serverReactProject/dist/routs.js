//modules
import { authenticationToken } from "./authentication.js";
import { controller_allData, controller_dataById, controller_allCategories, controller_dataByCategory, controller_userRegister, controller_login, controller_addToCart, controller_getCart, controller_updateCart, } from "./controller.js";
import express from "express";
const router = express.Router();
//get all products
router.get("/products", controller_allData);
//user register
router.post("/register", controller_userRegister);
//user login
router.post("login", controller_login);
//get all categories
router.get("/categories", controller_allCategories);
//get product by id
router.get("/products/:id", controller_dataById);
//get product by category
router.put("/products/category", controller_dataByCategory);
//add to cart
router.put("/cart", controller_addToCart);
//get cart
router.put("/cart/get", controller_getCart);
//add, remover and delete from cart
router.put("/cart/update", controller_updateCart);
//limited by token
router.use(authenticationToken);
export { router };
