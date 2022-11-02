import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../../Pages/CheckOut/CheckOut";
import Home from "../../../Pages/Home/Home/Home";
import SignIn from "../../../Pages/Login/SignIn/SignIn";
import SignUp from "../../../Pages/Login/SignUp/SignUp";
import Root from "../../Layout/Root";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/signin", element: <SignIn /> },
			{ path: "/signup", element: <SignUp /> },
			{ path: "/checkout/:id", element: <CheckOut /> },
		],
	},
]);

export default Routes;
