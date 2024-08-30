import {AuthModel} from "../model/authModel.js";

export const emailExist = async (mail) => {
	try {
		const exist = await AuthModel.findOne({userEmail: mail});
		return !!exist;
	} catch (err) {
		console.log(err);
	}
};
