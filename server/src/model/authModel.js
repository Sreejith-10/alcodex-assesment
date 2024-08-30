import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			require: true,
		},
		userEmail: {
			type: String,
			require: true,
			unique: true,
		},
		userPassword: {
			type: String,
			require: true,
		},
	},
	{timestamps: true}
);

export const AuthModel = mongoose.model("auth", AuthSchema);
