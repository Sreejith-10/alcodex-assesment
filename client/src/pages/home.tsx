<<<<<<< HEAD
import {useState} from "react";
import {Link} from "react-router-dom";
import {useToast} from "../hooks";

function auth() {
	const isAuth = Boolean(localStorage.getItem("token"));
	return isAuth;
}

const Home = () => {
	const [isLogged, setIsLogged] = useState(auth);

	const toast = useToast();

	const logout = () => {
		localStorage.removeItem("token");
		setIsLogged(false);
		toast?.add({
			title: "logged out",
			description: "user logged out succesfully",
			variant: "success",
			duration: 3000,
		});
	};

	return (
		<div className="w-full h-[40dvh] flex items-center justify-center">
			{isLogged ? (
				<div className="space-y-4 text-center">
					<h1 className="font-semibold text-3xl">Welcome back</h1>
					<button
						onClick={logout}
						className="bg-red-500 text-white py-2 px-6 rounded-md active:scale-90">
						Logout
					</button>
				</div>
			) : (
				<div className="space-y-4">
					<h1 className="font-semibold text-3xl">
						Please authenticate yourself
					</h1>
					<div className="flex gap-5 items-center justify-center">
						<Link
							to={"/login"}
							className="w-full py-[14px] text-center bg-highlight rounded-md uppercase text-white font-[700]">
							Login
						</Link>
						<Link
							to={"/signup"}
							className="w-full py-[14px] text-center bg-highlight rounded-md uppercase text-white font-[700] hover:bg-highlight/20">
							Signup
						</Link>
					</div>
				</div>
			)}
		</div>
	);
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../utils/isAuthenticated";


const Home = () => {
    const [isLogged, setIsLogged] = useState(isAuthenticated)

	const logout = () => {
		localStorage.removeItem("token")
		setIsLogged(false)
	}

	return <div className="w-full h-[40dvh] flex items-center justify-center">
		{
			isLogged ? <div className="flex items-center flex-col gap-4">
				<h1 className="text-3xl font-bold">Wlcome back user</h1>
				<button className="bg-highlight text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout</button>
			</div> : <div>
				<h1>Please authenticate</h1>
				<Link to={"/login"}>Login</Link>
				<Link to={"/signup"}>Signup</Link>
			</div>
		}
	</div>
>>>>>>> 64ba2ff4560288b4ce6a325ba26f2a80205ab14b
};

export default Home;
