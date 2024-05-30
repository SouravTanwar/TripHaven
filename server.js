import express from "express"
import hotelRouter from "./routes/hotel.router.js"
import router from "./routes/dataImport.router.js"
import mongoose from "mongoose"
import connectDB from "./config/dbconfig.js"

const app = express()

app.use(express.json()) // alternate for body parser







app.get("/", (req,res)=>{
    res.send("hello testing")
})

app.use("/api/hoteldata", router)
app.use("/api/hotels", hotelRouter)

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3500, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=> {
    console.log("MONGO DB conection failed 111 ",err);
})