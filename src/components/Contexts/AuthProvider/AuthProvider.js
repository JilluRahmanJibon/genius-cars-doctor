import React, { createContext, useEffect, useState } from "react";
import {
	getAuth,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import app from "../../../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	// create user with email and password
	const createUserWithEmailandPass = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// update user
	const updateUser = () => {};

	// sign in user
	const signInUserWithEmailPass = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				localStorage.removeItem("genius-token" );
			})
			.catch(error => {
				// An error happened.
			});
	};
	// manage user
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			setLoading(false);
			setUser(currentUser);
		});
		return () => {
			unSubscribe();
		};
	}, []);
	// auth info
	const value = {
		user,
		signOutUser,
		loading,
		setLoading,
		createUserWithEmailandPass,
		signInUserWithEmailPass,
	};
	return (
		<div>
			{" "}
			{loading && "loading..."}
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
