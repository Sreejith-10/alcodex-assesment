import express from "express";
import cors from "cors";
import router from "./route/authRoute.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import database from "./config/db.js";

dotenv.config();

const app = express();

const PORT = 3000;

app.use(
	cors({
		origin: process.env.CLIENT,
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE"],
	})
);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", router);

database;

app.listen(PORT, () => {
	console.log(`Server Started on Port ${PORT}`);
});
