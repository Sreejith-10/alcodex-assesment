import {Request, Response} from "express";
import {emailExist} from "utils/email.js";
import bcrypt from "bcrypt";
import {AuthModel} from "model/authModel.js";

interface IRequest extends Request {
	body: {
		name: string;
		email: string;
		password: string;
	};
}

//user register controller
export const registerUser = async (req: IRequest, res: Response) => {
	const {name, email, password} = req.body;

	//checking if email alredy exist
	const exist = await emailExist(email);

	try {
		if (!exist) {
			const salt = await bcrypt.genSalt(12);
			const hash = await bcrypt.hash(password, salt);

			await AuthModel.create({
				userName: name,
				userEmail: email,
				userPassword: hash,
			});
            return res.status(201).json({message:"user signed in"})
		}else{
            return res.status(409).json({message:"email already exist"})
        }
	} catch (error) {
		return res.status(500).json({message: "something went wrong"});
	}
};
