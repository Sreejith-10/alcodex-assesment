import express from "express";
import {loginUser} from "../controller/login.js";
import {registerUser} from "../controller/register.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", registerUser);

export default router;
