import express, {Router} from "express"
import categories from "../data/categories.js"
import { Category } from "../models/category.model.js";



const categoryImportRouter = Router()

categoryImportRouter.route("/").post(async (req,res)=>{
    try {
        await Category.deleteMany();                                   // Hotel.remove() has been decrepiated
        const categoriesDB = await Category.insertMany(categories.data)
        res.json(categoriesDB)
    } catch (error) {
        console.log(error);
        res.json({message: "Couldn't add categories to DB"})
    }
})

export default categoryImportRouter
