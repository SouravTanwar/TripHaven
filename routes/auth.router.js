import express, {Router} from "express"

const authRouter = Router()

authRouter.route("/register").post(async (req,res) => {
    try {
        const newUser = new UserActivation({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: req.body.password
        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)                 // password is compromised
    } catch (error) {
        res.status(500).json({message : "Error while creating user"})
    }
})



export default authRouter