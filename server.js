import express from "express"
import hotelRouter from "./routes/hotel.router.js"
import hotelImportRouter from "./routes/dataImport.router.js"
import mongoose from "mongoose"
import connectDB from "./config/dbconfig.js"
import categoryImportRouter from "./routes/categoryImport.router.js"
import categoryRouter from "./routes/category.router.js"
import singleHotelRouter from "./routes/singleHotel.router.js"

const app = express()

app.use(express.json()) // alternate for body parser


app.get("/", (req,res)=>{
    res.send("hello testing")
})

app.use("/api/hoteldata", hotelImportRouter)
app.use("/api/categorydata", categoryImportRouter)
app.use("/api/hotels", hotelRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/hotels", singleHotelRouter)

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3500, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=> {
    console.log("MONGO DB conection failed 111 ",err);
})