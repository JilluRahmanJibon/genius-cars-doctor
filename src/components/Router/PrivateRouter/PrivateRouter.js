import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
	const location = useLocation();

	const { user, loading, setLoading } = useContext(AuthContext);
	if (loading) {
		return setLoading(true);
	}
	if (!user) {
		return <NavLink to="/signin" state={{ from: location }} replace />;
	}
	return children;
};

export default PrivateRouter;
