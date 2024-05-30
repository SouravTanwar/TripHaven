import { Router } from "express";
import { Hotel } from "../models/hotel.model.js";


const hotelRouter = Router()


hotelRouter.route("/").get(async (req,res)=>{
    try {
        const hotels = await Hotel.find({})
        hotels ? res.json(hotels) : res.status(404).json({message : "No data found"})
    } catch (error) {
        console.log(error);
    }
})



export default hotelRouter