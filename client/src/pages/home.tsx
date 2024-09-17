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
					<h1 className="font-semibold text-3xl sm:text-center">
						Please authenticate yourself
					</h1>
					<div className="flex gap-5 items-center justify-center sm:px-3">
						<Link
							to={"/login"}
							className="w-full sm:w-[50%] py-[14px] text-center bg-highlight rounded-md uppercase text-white font-[700]">
							Login
						</Link>
						<Link
							to={"/signup"}
							className="w-full sm:w-[50%] py-[14px] text-center bg-highlight rounded-md uppercase text-white font-[700] ">
							Signup
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
