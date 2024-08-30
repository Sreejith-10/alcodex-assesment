import bcrypt from "bcrypt";
import {emailExist} from "../utils/email.js";
import {AuthModel} from "../model/authModel.js";
s;

export const loginUser = async (req, res) => {
	const {email, password} = req.body;

	const exist = await emailExist(email);

	if (exist) {
		const authData = await AuthModel.findOne({userEmail: email});

		if (!authData) {
			return res.status(404).json({email: "email not exist"});
		} else {
		}
	}
};
