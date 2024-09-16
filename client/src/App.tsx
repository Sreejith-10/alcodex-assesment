import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Nav from "./components/nav";
import Footer from "./components/footer";
import {isAuthenticated} from "./utils/isAuthenticated";

const router = createBrowserRouter([
	{path: "/", element: <Home />},
	{path: "/login", element: isAuthenticated() ? <Home /> : <Login />},
	{
		path: "/signup",
		element: isAuthenticated() ? <Home /> : <Signup />,
	},
]);

const App = () => {
	return (
		<div className="w-full h-auto flex flex-col">
			<Nav />
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
};

export default App;
