import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
const Navbar = () => {
	const { user } = useContext(AuthContext);
	const menuItems = (
		<>
			<li className="font-semibold">
				<Link to="/">Home</Link>
			</li>
			<li className="font-semibold">
				<Link to="/signin">Sign In</Link>
			</li>
		</>
	);

	return (
		<div className="navbar max-w-screen-xl mx-auto h-20   bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<FaBars />
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						{menuItems}
					</ul>
				</div>
				<Link to="/">
					<img className="w-20" src={logo} alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">{menuItems}</ul>
			</div>
			<div className="navbar-end">
				<button className="btn btn-outline btn-success">Appoinment</button>
			</div>
		</div>
	);
};

export default Navbar;
