import express , {Router} from "express"
import { Wishlist } from "../models/wishlist.model.js"

const wishlistRouter = Router()

wishlistRouter.route("/").post(async (req, res) => {
    const wishlist = new Wishlist(req.body)
    try {
        const savedWishlist = await wishlist.save()
        res.status(201).json(savedWishlist)
    } catch (error) {
        res.status(500).json({message: "failed to create wishlist"})
    }
})

wishlistRouter.route("/:id").delete(async (req,res) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id)
        res.json({message: "hotel deleted from wishlist"})
    } catch (error) {
        res.status(500).json({message: "can't delete hotel from wishlist"})
    }
})

wishlistRouter.route("/").get(async (req,res) => {
    try {
        const wishlist = await Wishlist.find({})
        wishlist ? res.json(wishlist) : res.json({message: "No items in wishlist"})
    } catch (error) {
        res.status(500).json(error)
    }
})

export default wishlistRouter