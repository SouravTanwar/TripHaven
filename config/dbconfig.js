import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();                 // path not set .env

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB connection error", error);
        process.exit(1)
    }
}

export default connectDB