import express, {Router} from "express"
import singleHotelHandler from "../controllers/singleHotelController.js"


const singleHotelRouter = Router()

singleHotelRouter.route("/:id").get(singleHotelHandler)

export default singleHotelRouter