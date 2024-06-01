import { Router } from "express";
import categoryHandler from "../controllers/categoryController.js";



const categoryRouter = Router()


categoryRouter.route("/").get(categoryHandler)



export default categoryRouter