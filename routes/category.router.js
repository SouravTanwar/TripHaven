import { Router } from "express";
import { Category } from "../models/category.model.js";


const categoryRouter = Router()


categoryRouter.route("/").get(async (req,res)=>{
    try {
        const categories = await Category.find({})
        categories ? res.json(categories) : res.status(404).json({message : "No category found"})
    } catch (error) {
        console.log(error);
    }
})



export default categoryRouter