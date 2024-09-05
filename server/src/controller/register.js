import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {emailExist} from "../utils/email.js";
import {AuthModel} from "../model/authModel.js";

//user register controller
export const registerUser = async (req, res) => {
	const {name, email, password} = req.body;

	//checking if email alredy exist
	const exist = await emailExist(email);

	try {
		if (!exist) {
			const hash = await bcrypt.hash(password, 12);

			const user = await AuthModel.create({
				userName: name,
				userEmail: email,
				userPassword: hash,
			});

			const token = jwt.sign(
				{name: user.userName, email: user.userEmail, id: user._id},
				process.env.JWTSERCRET,
				{expiresIn: "12h"}
			);

			return res
				.cookie("token", token)
				.status(201)
				.json({message: "user signed in"});
		} else {
			return res.status(409).json({message: "email already exist"});
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({message: "something went wrong"});
	}
};
