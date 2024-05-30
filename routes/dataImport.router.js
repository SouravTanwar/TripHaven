import { Hotel } from "../models/hotel.model.js"
import express, {Router} from "express"
import hotels from "../data/hotel.js"



const router = Router()

router.route("/").post(async (req,res)=>{
    try {
        await Hotel.deleteMany();                                   // Hotel.remove() has been decrepiated
        const hotelsDB = await Hotel.insertMany(hotels.data)
        res.json(hotelsDB)
    } catch (error) {
        console.log(error);
        res.json({message: "Couldn't add data to DB"})
    }
})

export default router