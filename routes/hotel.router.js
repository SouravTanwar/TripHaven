import { Router } from "express";
import getAllHotelHandler from "../controllers/hotelController.js";



const hotelRouter = Router()


hotelRouter.route("/").get(getAllHotelHandler)



export default hotelRouter