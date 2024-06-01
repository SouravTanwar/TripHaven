import mongoose, {Schema} from "mongoose";

const wishlistSchema = new Schema({
    hotelId : {
        type: String,
        required: true
    }
})

export const Wishlist = mongoose.model("Wishlist", wishlistSchema)