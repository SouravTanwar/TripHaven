import { User }from "../models/user.model.js";
import CryptoJS from "crypto-js";


const signupHandler = async (req,res) => {
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
}



export default signupHandler