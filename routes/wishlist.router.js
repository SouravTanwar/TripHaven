import express , {Router} from "express"
import verifyUser from "../middleware/verifyUser.js"
import {createWishlistHandler, deleteWishlistHandler, getWishlistHandler} from "../controllers/wishlistController.js"

const wishlistRouter = Router()

wishlistRouter.route("/").post(verifyUser, createWishlistHandler )

wishlistRouter.route("/:id").delete(verifyUser, deleteWishlistHandler )

wishlistRouter.route("/").get(verifyUser, getWishlistHandler)

export default wishlistRouter