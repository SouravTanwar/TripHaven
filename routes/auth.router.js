import express, {Router} from "express"
import signupHandler from "../controllers/signupController.js";
import loginHandler from "../controllers/loginController.js";

const authRouter = Router()

authRouter.route("/register").post(signupHandler)

authRouter.route("/login").post(loginHandler)


export default authRouter