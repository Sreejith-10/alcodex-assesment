import express from "express";
import {loginUser} from "../controller/login.js";
import {logOutUser} from "../controller/logout.js";
import {registerUser} from "../controller/register.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/logout", logOutUser);
router.post("/signup", registerUser);

export default router;
