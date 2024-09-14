import React, { useState } from "react";
import { Link } from "react-router-dom";

function isAuth(){
	const auth = Boolean(localStorage.getItem("token"))
	return auth
}

const Home = () => {
    const [isLogged, setIsLogged] = useState(isAuth)

	const logout = () => {
		localStorage.removeItem("token")
		setIsLogged(false)
	}

	return <div>
		{
			isLogged ? <div>
				<h1>Wlcome back user</h1>
				<button onClick={logout}>Logout</button>
			</div> : <div>
				<h1>Please authenticate</h1>
				<Link to={"/login"}>Login</Link>
				<Link to={"/signup"}>Signup</Link>
			</div>
		}
	</div>
};

export default Home;
