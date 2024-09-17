import {useState} from "react";
import {FaApple, FaEye, FaEyeSlash, FaFacebook, FaGoogle} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import * as z from "zod";
import {signupSchema} from "../schema/signupSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import axios, {AxiosError} from "axios";
import {useToast} from "../hooks";
import {Button} from "../components/button";

const Signup = () => {
	const [showPass, setShowPass] = useState(false);
	const toast = useToast();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: {errors, isSubmitting},
	} = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const submitHandler = async (values: z.infer<typeof signupSchema>) => {
		try {
			const {data} = await axios.post<{token: string; message: string}>(
				"http://localhost:3000/auth/signup",
				{...values},
				{headers: {"Content-Type": "application/json"}, withCredentials: true}
			);
			localStorage.setItem("token", JSON.stringify(data.token));
			toast?.add({
				title: "success",
				description: data.message,
				duration: 3000,
				variant: "success",
			});
			navigate("/");
		} catch (error) {
			console.log(error);
			const err = error as AxiosError<{message: string}>;
			if (err.message === "Network Error") {
				toast?.add({
					title: "Network error",
					description: "something went wrong",
					duration: 3000,
					variant: "error",
				});
				return;
			}
			toast?.add({
				title: "error",
				description: err.response?.data.message,
				duration: 3000,
				variant: "error",
			});
		}
	};

	return (
		<div className="w-full h-auto flex lg:flex-col-reverse lg:items-center">
			<div className="w-1/2 md:w-full flex items-center justify-center">
				<div className="w-full h-full py-20 px-40 md:px-20 xs:px-10 md:py-8 flex flex-col items-center md:justify-center">
					<form
						action=""
						className="w-[495px] space-y-10 md:w-full"
						onSubmit={handleSubmit(submitHandler)}>
						<div className="w-[495px] md:w-[100%] h-[40px] relative">
							<input
								{...register("name")}
								type="text"
								name=""
								id=""
								className={`w-full h-full border rounded-md peer p-5 ${
									errors.name?.message ? "border-red-500" : " border-black"
								}`}
								required
							/>
							<label
								htmlFor="name"
								className={`absolute top-1/2 left-5 -translate-y-1/2 pointer-events-none peer-valid:top-0 peer-valid:bg-white peer-valid:px-3 peer-valid:text-sm peer-focus:top-0 peer-focus:bg-white peer-focus:px-3 peer-focus:text-sm transition-all ease-in-out delay-100 duration-500 ${
									errors.name?.message && "text-red-500"
								}`}>
								Name
							</label>
							<div className="text-red-500">{errors.name?.message}</div>
						</div>
						<div className="w-[495px] md:w-[100%] h-[40px] relative">
							<input
								{...register("email")}
								type="text"
								className={`w-full h-full border rounded-md peer p-5 ${
									errors.email?.message ? "border-red-500" : " border-black"
								}`}
								required
							/>
							<label
								htmlFor="email"
								className={`absolute top-1/2 left-5 -translate-y-1/2 pointer-events-none peer-valid:top-0 peer-valid:bg-white peer-valid:px-3 peer-valid:text-sm peer-focus:top-0 peer-focus:bg-white peer-focus:px-3 peer-focus:text-sm transition-all ease-in-out delay-100 duration-500 ${
									errors.email?.message && "text-red-500"
								}`}>
								Email
							</label>
							<div className="text-red-500">{errors.email?.message}</div>
						</div>
						<div className="w-[495px] md:w-[100%] h-[40px] relative">
							<input
								{...register("password")}
								type={showPass ? "text" : "password"}
								className={`w-full h-full border rounded-md peer p-5 ${
									errors.password?.message ? "border-red-500" : " border-black"
								}`}
								required
							/>
							<label
								htmlFor="password"
								className={`absolute top-1/2 left-5 -translate-y-1/2 pointer-events-none peer-valid:top-0 peer-valid:bg-white peer-valid:px-3 peer-valid:text-sm peer-focus:top-0 peer-focus:bg-white peer-focus:px-3 peer-focus:text-sm transition-all ease-in-out delay-100 duration-500 ${
									errors.password?.message && "text-red-500"
								}`}>
								Password
							</label>
							<div className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer">
								{showPass ? (
									<FaEye size={20} onClick={() => setShowPass(false)} />
								) : (
									<FaEyeSlash size={20} onClick={() => setShowPass(true)} />
								)}
							</div>
							<div className="text-red-500">{errors.password?.message}</div>
						</div>
						<div className="flex justify-between">
							<Link to={"/login"}>Login</Link>
						</div>
						<Button
							type="submit"
							className="w-full py-[14px] bg-highlight rounded-md uppercase text-white font-[700]"
							isLoading={isSubmitting}>
							Signup
						</Button>
					</form>
					<div className=" space-y-4 mt-5 flex flex-col items-center">
						<div>OR</div>
						<div className="flex gap-3">
							<FaFacebook size={63} className="text-highlight cursor-pointer" />
							<FaGoogle size={63} className="text-highlight cursor-pointer" />
							<FaApple size={63} className="text-highlight cursor-pointer" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-1/2 flex flex-col items-center">
				<img src="/ce2c9c3eb6cd3e3b9f499eb5a26a5583.png" alt="icon" />
				<h2 className="text-[96px] font-[800] md:text-[78px]">CastMe</h2>
			</div>
		</div>
	);
};

export default Signup;
