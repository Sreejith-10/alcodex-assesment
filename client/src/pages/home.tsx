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
};

export default Home;
