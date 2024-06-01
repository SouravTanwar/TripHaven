import jwt from "jsonwebtoken"

const verifyUser = (req,res,next) => {
    const token = req.headers.authorization
    if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET), (err, user) => {
            if(err) res.status(403).json({message: "Invalid Token"})
            req.user = user
            next()
        }
    }
}


export default verifyUser