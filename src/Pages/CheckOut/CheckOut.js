import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
	const { user } = useContext(AuthContext);
	const { id } = useParams();
	const [service, setService] = useState({});
	const { title, _id, price } = service;
	useEffect(() => {
		fetch(`https://genius-car-server-xi-one.vercel.app/services/${id}`)
			.then(res => res.json())
			.then(data => setService(data));
	}, []);
	const handleCheckout = e => {
		e.preventDefault();
		const form = e.target;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const email = user?.email || "unregistered";
		const phone = form.number.value;
		const message = form.message.value;
		const order = {
			service: _id,
			serviceName: title,
			price: price,
			customer: name,
			email,
			phone,
			message,
		};
		console.log(order);
		fetch(`https://genius-car-server-xi-one.vercel.app/orders`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then(res => res.json())
			.then(data => {
				if (data.acknowledged) {
					form.reset();
					alert("order place successfully");
				}
			})
			.catch(err => console.log(err));
	};
	return (
		<div className="my-5  sm:p-10 p-3">
			<h1 title="service name" className="md:text-4xl font-bold text-xl pb-4 ">
				You are about to order: {title}
			</h1>
			<h1
				title="price"
				className="md:text-3xl font-bold text-xl text-red-400 pb-8 ">
				Price: ${price}
			</h1>
			<form onSubmit={handleCheckout}>
				<div className="md:grid   flex-col flex grid-cols-2 gap-5">
					<input
						name="firstName"
						required
						type="text"
						placeholder="First Name"
						className="input input-bordered input-secondary w-full "
					/>
					<input
						name="lastName"
						required
						type="text"
						placeholder="Last Name"
						className="input input-bordered input-secondary w-full "
					/>
					<input
						name="number"
						required
						type="number"
						placeholder="Your phone"
						className="input input-bordered input-secondary w-full "
					/>
					<input
						name="email"
						required
						defaultValue={user?.email}
						type="email"
						readOnly
						placeholder="Your Email"
						className="input input-bordered input-secondary w-full "
					/>
					<textarea
						name="message"
						required
						className="textarea w-full  border border-r-amber-400 col-span-2"
						rows="4"
						placeholder="Your Message......."></textarea>
					<input
						className="w-full col-span-2 bg-orange-500 hover:bg-orange-600 text-white rounded py-2 "
						type="submit"
						value="Order Confirm"
					/>
				</div>
			</form>
		</div>
	);
};

export default CheckOut;
