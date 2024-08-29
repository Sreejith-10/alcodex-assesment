import { loginUser } from "controller/login.js"
import { logOutUser } from "controller/logout.js"
import { registerUser } from "controller/register.js"
import express, { Router } from "express"

const router:Router = express.Router()

router.post("/login",loginUser)
router.get("/logout",logOutUser)
router.post("/register",registerUser)

export default router