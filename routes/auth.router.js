import express, {Router} from "express"
import { User }from "../models/user.model.js";
import CryptoJS from "crypto-js";
// bcrypt is better i think as cryptojs is discontinued
import jwt from "jsonwebtoken";

const authRouter = Router()

authRouter.route("/register").post(async (req,res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password , process.env.PASSWORD_SECRET_KEY).toString()         
        })
        const savedUser = await newUser.save()        
        res.status(201).json(savedUser)                
    } catch (error) {
        res.status(500).json({message : "Error while creating user"})
    }
})

authRouter.route("/login").post(async (req,res) => {
    try {
        const user = await User.findOne({number: req.body.number})
        if(!user){
            res.status(401).json({message: "invalid mobile Number"})
        }

        const decodedPassword = CryptoJS.AES.decrypt(user.password , process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8)
        console.log(decodedPassword);
        decodedPassword !== req.body.password && res.status(401).json({message: "incorrect password"})

        const { password, ...rest} = user._doc        // we also have .select("-password")

        const accessToken = jwt.sign( {username: user.username}, process.env.ACCESS_TOKEN_SECRET )

        res.json({...rest, accessToken})

    } catch (error) {
        res.status(500).json({message : "Error while loging user"})
    }
})


export default authRouter