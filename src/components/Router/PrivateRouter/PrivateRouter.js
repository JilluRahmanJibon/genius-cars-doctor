import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
	const location = useLocation();

	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return;
	}
	if (user?.uid) {
		return children;
	}
	return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRouter;
