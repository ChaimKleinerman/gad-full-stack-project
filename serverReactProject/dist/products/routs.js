//modules
import { authenticationToken } from "../authentication.js";
import { allTrips, TripByIdController, controller_delete, controller_update, controllerUserRegister, controller_login, controller_newTrip, } from "../controller.js";
import express from "express";
const router = express.Router();
//get all trips
router.get("/trips", allTrips);
//user register
router.post("/register", controllerUserRegister);
//user login
router.post("/login", controller_login);
//limited by token
router.use(authenticationToken);
//delete trip
router.delete("/trips/:id", controller_delete);
//get trip by id
router.get("/trips/:id", TripByIdController);
//update trip
router.put(`/trips/:id`, controller_update);
//new trip
router.post("/trips/", controller_newTrip);
export { router };
