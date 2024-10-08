import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongo_url = process.env.MONGO_URI;

mongoose.connect(mongo_url);

const database = mongoose.connection;

database.once("open", () => {
	console.log("Connected to Database");
});

database.on("error", () => {
	console.log("Connection Failed");
});

export default database;
