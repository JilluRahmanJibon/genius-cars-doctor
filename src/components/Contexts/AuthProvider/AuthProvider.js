import React, { createContext, useEffect, useState } from "react";
import {
	getAuth,
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

	// manage user
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			if (currentUser) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
		return () => {
			unSubscribe();
		};
	}, []);
	// auth info
	const value = { user, createUserWithEmailandPass, signInUserWithEmailPass };
	return (
		<div>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
