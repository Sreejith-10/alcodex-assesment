import bcrypt from "bcrypt";
import {emailExist} from "../utils/email.js";
import {AuthModel} from "../model/authModel.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
	try {
		const {email, password} = req.body;

		const exist = await emailExist(email);

		if (exist) {
			const authData = await AuthModel.findOne({userEmail: email});

			if (!authData) {
				return res.status(404).json({email: "email not exist"});
			} else {
				const result = await bcrypt.compare(password, authData.userPassword);

				if (!result) {
					return res
						.status(401)
						.json({message: "Provided password is incorrect"});
				} else {
					const token = jwt.sign(
						{
							name: authData.userName,
							email: authData.userEmail,
							id: authData._id,
						},
						process.env.JWTSERCRET,
						{expiresIn: "12h"}
					);

					return res
						.cookie("token", token, {maxAge: 1000 * 60 * 60 * 10})
						.status(200)
						.json({message: "user signed in", token});
				}
			}
		}
	} catch (error) {
		console.log(error);
	}
};
