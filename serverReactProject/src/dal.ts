//modules
import { Product } from "./types.js";
import { connectToDb } from "./app.js";
import { productModel } from "./models/modelProduct.js";
import { UserModel } from "./models/modelUser.js";
import { Err } from "./types.js";
import { CategoryModel } from "./models/modelCategories.js";
//connection
connectToDb();

//gat all products
const dal_allData = async () => {
    const data = await productModel.find({}).sort({ "timeChosen": -1 }).exec();
    if (!data) {
        throw new Err(500, "the get all been filed");
    }

    return data;
};
//get all categories
const dal_allCategories = async () => {
    const categories = await CategoryModel.find({}).sort({ "timeChosen": -1 }).exec();
    if (!categories) {
        throw new Err(500, "the get all categories been filed");
    }
    console.log('categories this is what i got');


    return categories;
};
// get data by category
const dal_dataByCategory = async (category: string) => {
    console.log("hellow");

    const dataByCategory = await productModel
        .find({ category: category })
        .exec();
    if (!dataByCategory) {
        throw new Err(500, "the get data by category been filed");
    }
    const incrementChosenCategory = await CategoryModel.findOneAndUpdate(
        { name: category },
        { $inc: { timeChosen: 1 } }
    );
    if (!incrementChosenCategory) {
        throw new Err(500, "the increment been filed");
    }


    console.log(incrementChosenCategory);
    return dataByCategory;
};

//gat data by id
async function dal_dataById(id: string) {
    const dataById = await productModel.findOne({ id: id }).exec();
    console.log(dataById);

    if (!dataById) {
        throw { code: 42231, massage: "data not found" };
    }
    return dataById;
}

//user register
async function dal_insertUser(email: string, password: string) {
    console.log('get req dal', email, password);

    const newUser = new UserModel({ email: email, password: password });
    const result = await newUser.save();
    if (!result) throw new Err(500, "the insert been felid");
    return "the user inserted successful";
}
//user login
const dal_login = async (email: string, password: string) => {
    console.log('get req dal', email, password)
    const user = await UserModel.findOne({ email: email, password: password }).exec();

    if (!user) throw new Err(400, "user is not exist");
    return "user exist";
};
//add to cart
// Add to cart
const dal_addToCart = async (user_email: string, product_id: string) => {
    console.log('get req dal', user_email, product_id);

    const add = await UserModel.findOneAndUpdate(
        { email: user_email },
        { $push: { cart: { product_id: product_id, quantity: 1 } } },
    );
    console.log(add);

    if (!add) throw new Err(500, "The add has failed");
    console.log('add to cart');

    return "The product added successfully";
};

// Get cart
const dal_getCart = async (user_email: string) => {
    try {
        console.log('getcart req dal', user_email);

        // Find the user document by user_id and select the 'cart' property
        const user = await UserModel.findOne({ email: user_email }).select("cart").exec();
        console.log('user this is what i got', user);

        if (!user) {
            console.log('get req ddal error');
            throw new Err(404, "User not found");
        }

        // Extract the product IDs and quantities from the user's cart
        const productsId = user.cart.map(item => (item.product_id));
        const definedProductsId = productsId
            .filter(id => id !== undefined && id !== null)
            .map(id => parseInt(id as string, 10))
        console.log('this definde', definedProductsId);

        const quantities =user.cart.map(item => (item.quantity));
        console.log('this quantities', quantities);
        

        const products = await productModel.find({ id: { $in: definedProductsId } })
        // console.log(products, 'this is products');

        return [products, quantities];
    } catch (error) {
        console.log('get req dal error second');
        // Handle errors, log them, or throw a custom error
        throw new Err(500, "Failed to get cart");
    }
};

//update cart
const dal_updateCart = async (
    user_email: string,
    product_id: string,
    action: string
) => {
    console.log('get to dal', user_email, typeof (product_id), action);

    let updateOperation: any;
    switch (action) {
        case "+":
            updateOperation = { $inc: { 'cart.$.quantity': 1 } };
            break;
        case "-":
            updateOperation = { $inc: { 'cart.$.quantity': -1 } };   
            break;
        case "remove":
            updateOperation = { $pull: { cart: { product_id: product_id } } };
            break;
        case "delete":
            updateOperation = { $set: { cart: [] } };
            break;
        default:
            throw new Err(400, "Invalid action");
    }

    try {
        console.log('update cart dal', updateOperation)
        
        const updatedUser = await UserModel.updateOne(
            { email: user_email,"cart.product_id": product_id },
            updateOperation,
            { new: true }
        );

        console.log('cart update updatue user',updatedUser);

        if (!updatedUser) {
            console.log('cart update updatue user error');
            
            throw new Err(500, "The update operation failed");
        }

        return "The product operation was successful";
    } catch (error) {
        console.error(error);
        throw new Err(500, "An error occurred during the update operation");
    }
};


export {
    dal_allData,
    dal_dataById,
    dal_dataByCategory,
    dal_allCategories,
    dal_insertUser,
    dal_login,
    dal_addToCart,
    dal_getCart,
    dal_updateCart
};
