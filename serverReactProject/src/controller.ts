// Import necessary modules and dependencies
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Err } from "./types.js";
import {
    bl_dataById,
    bl_allData,
    bl_allCategories,
    bl_dataByCategory,
    bl_insertUser,
    bl_login,
    bl_addToCart,
    bl_getCart,
} from "./BL.js";

// Configure environment variables
dotenv.config();

// Controller to get all trips
const controller_allData = async (req: Request, res: Response) => {
    try {
        const data = await bl_allData();
        res.json(data);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Controller to get data by ID
const controller_dataById = async (req: Request, res: Response) => {
    try {
        const user_id = await bl_dataById(req);
        res.send(user_id);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code).send(err.message);
        }
    }
};

// Controller to get all categories
const controller_allCategories = async (req: Request, res: Response) => {
    try {
        const categories = await bl_allCategories();
        res.send(categories);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code).send(err.message);
        }
    }
};

// Controller to get data by category
const controller_dataByCategory = async (req: Request, res: Response) => {
    try {
        const data = await bl_dataByCategory(req)
        res.send(data);
    } catch (err) {
        console.log(1,req.body);
                
        if (err instanceof Err) {
            res.status(err.code).send(err.message);
        }
    }
};

// Controller for user registration
const controller_userRegister = async (req: Request, res: Response) => {
    try {
        const result = await bl_insertUser(req);
        res.send(result);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code).send(err.message);
        }
    }
};

// Controller for user login
const controller_login = async (req: Request, res: Response) => {
    try {
        console.log(req.headers); // For debugging purposes
        
        const token = await bl_login(req);
        res.send(token);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code).send(err.message);
        }
    }
};

//add to cart
const controller_addToCart = async (req: Request, res: Response) => {
    try {
        const data = await bl_addToCart(req);
        res.send(data);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code).send(err.message);
        }
    }
}
//get cart
const controller_getCart = async (req: Request, res: Response) => {
    try {
        const data = await bl_getCart(req);
        res.send(data);
    } catch (err) {
        if (err instanceof Err) {
            res.status(err.code).send(err.message);
        }
    }
}

// Export the controllers
export {
    controller_allData,
    controller_dataById,
    controller_allCategories,
    controller_dataByCategory,
    controller_userRegister,
    controller_login,
    controller_addToCart,
    controller_getCart,
};
