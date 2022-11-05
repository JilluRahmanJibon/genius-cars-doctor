import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import image from "../../assets/images/login/login.svg";

const SignUp = () => {
	const { createUserWithEmailandPass } = useContext(AuthContext);
	const [terms, setTerms] = useState(true);

	const createUser = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		createUserWithEmailandPass(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
			})
			.catch(error => {
				console.error(error);
			});
	};
	return (
		<div className="hero min-h-screen  ">
			<div className="hero-content grid gap-10 md:grid-cols-2  ">
				<div className="text-center lg:text-left">
					<img src={image} alt="" />
				</div>
				<div className="card  border-2 border-gray-200 py-10 px-5 w-full max-w-xl shadow-2xl bg-base-100">
					{" "}
					<h1 className="text-5xl text-center   font-bold">Sign Up </h1>
					<form onSubmit={createUser} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								name="name"
								required
								type="text"
								placeholder="name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								name="email"
								required
								type="email"
								placeholder="email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								name="password"
								required
								type="password"
								placeholder="password"
								className="input input-bordered"
							/>
						</div>
						<div className="flex items-center gap-2">
							<input
								required
								type="checkbox"
								id="checkbox"
								onClick={() => setTerms(!terms)}
							/>
							<label htmlFor="checkbox">
								<span>
									Accepts{" "}
									<Link className="border-b  border-blue-500">
										Terms & Conditions
									</Link>{" "}
								</span>
							</label>
						</div>

						<div className="form-control mt-6">
							<input
								disabled={terms}
								className="btn btn-primary"
								type="submit"
								value="Sign Up"
							/>
						</div>
					</form>
					<div className="text-center">
						<p>
							Already have an Account? Please{" "}
							<Link to="/signin" className="text-red-500 font-bold">
								SignIn
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
