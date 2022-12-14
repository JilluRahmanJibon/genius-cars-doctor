import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../../Pages/CheckOut/CheckOut";
import Home from "../../../Pages/Home/Home/Home";
import SignIn from "../../../Pages/Login/SignIn/SignIn";
import SignUp from "../../../Pages/Login/SignUp/SignUp";
import Orders from "../../../Pages/Orders/Orders";
import Root from "../../Layout/Root";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/signin", element: <SignIn /> },
			{ path: "/signup", element: <SignUp /> },
			{
				path: "/checkout/:id",
				element: (
					<PrivateRouter>
						<CheckOut />{" "}
					</PrivateRouter>
				),
			},
			{
				path: "/orders",
				element: (
					<PrivateRouter>
						<Orders />
					</PrivateRouter>
				),
			},
		],
	},
]);

export default Routes;
