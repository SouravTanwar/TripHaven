import express, {Router} from "express"
import { Hotel } from "../models/hotel.model.js";



const singleHotelRouter = Router()

singleHotelRouter.route("/:id").get(async (req,res)=>{
    try {
        const { id } = req.params;
        const hotel = await Hotel.findById(id)
        res.json(hotel)
    } catch (error) {
        res.status(404).json({message: "No hotel found"})
    }
})

export default singleHotelRouter