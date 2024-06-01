import { Hotel } from "../models/hotel.model.js";


const getAllHotelHandler = async (req,res)=>{
    const hotelCategory = req.query.category          // http://localhost:3500/api/hotels?category=National+park
    try {
        let hotels
        if(hotelCategory){
            hotels = await Hotel.find({category: hotelCategory})
        }
        else{
            hotels = await Hotel.find({})
        }
        hotels ? res.json(hotels) : res.status(404).json({message : "No data found"})
    } catch (error) {
        console.log(error);
    }
}


export default getAllHotelHandler