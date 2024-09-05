import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Nav from "./components/nav";
import Footer from "./components/footer";

const router = createBrowserRouter([
	{path: "/", element: <Home />},
	{path: "/login", element: <Login />},
	{
		path: "/signup",
		element: <Signup />,
	},
]);

const App = () => {
	return (
		<>
			<Nav />
			<RouterProvider router={router} />
			<Footer />
		</>
	);
};

export default App;
