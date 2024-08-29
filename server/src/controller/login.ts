import {Request, Response} from "express";
import {emailExist} from "utils/email.js";
import bcrypt from "bcrypt";

interface IRequest extends Request {
	body: {
		email: string;
		password: string;
	};
}

export const loginUser = async (req: IRequest, res: Response) => {
	const {email, password} = req.body;

};
