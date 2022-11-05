import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import image from "../../assets/images/login/login.svg";
const SignIn = () => {
	const { signInUserWithEmailPass } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";
	const handleSignIn = e => {
		e.preventDefault();
		const form = e.target;

		const email = form.email.value;
		const password = form.password.value;
		signInUserWithEmailPass(email, password)
			.then(result => {
				const user = result.user;
				const currentUser = {
					email: user.email,
				};

				// get jwt token
				fetch("https://genius-car-server-xi-one.vercel.app/jwt", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(currentUser),
				})
					.then(res => res.json())
					.then(data => {
						// local storage is the easiest but not the best place to store jwt token
						localStorage.setItem("genius-token", data.token);
						navigate(from, { replace: true });
					});
			})
			.catch(error => console.error(error));
	};
	return (
		<div className="hero min-h-screen  ">
			<div className="hero-content grid gap-10 md:grid-cols-2  ">
				<div className="text-center lg:text-left">
					<img src={image} alt="" />
				</div>
				<div className="card  border-2 border-gray-200 py-10 px-5 w-full max-w-xl shadow-2xl bg-base-100">
					{" "}
					<h1 className="text-5xl text-center   font-bold">Sgin In </h1>
					<form onSubmit={handleSignIn} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								required
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								required
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
							/>
							<label className="label">
								<Link className="label-text-alt link link-hover">
									Forgot password?
								</Link>
							</label>
						</div>
						<div className="form-control mt-6">
							<input
								className="btn btn-primary"
								type="submit"
								value="Sgin In"
							/>
						</div>
					</form>
					<div className="text-center">
						<p>
							New to Genius Car? Please{" "}
							<Link to="/signup" className="text-red-500 font-bold">
								SignUp
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
