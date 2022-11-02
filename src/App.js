import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./components/Router/Routes/Routes";

function App() {
	return (
		<div data-theme="light">
			<RouterProvider router={Routes} />
		</div>
	);
}

export default App;
