import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8000/services")
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	return (
		<div className="m-12">
			<div className="text-center">
				<h3 className="text-red-500  font-bold text-xl">Service</h3>
				<h1 className="md:text-5xl py-6 text-xl font-bold">Our Service Area</h1>
				<p>
					the majority have suffered alteration in some form, by injected
					humour, or randomised <br /> words which don't look even slightly
					believable.{" "}
				</p>
			</div>
			<div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
				{services.map(service => (
					<div
						key={service._id}
						className="rounded-lg p-3 border-2   bg-base-100 shadow-xl">
						<figure>
							<img
								className="rounded h-[250px]"
								src={service.img}
								alt="services"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{service.title}</h2>

							<div className=" flex justify-end">
								<p className="text-red-500 font-bold ">
									Price: ${service.price}
								</p>
								<Link to={`/checkout/${service._id}`}>
									<button className="text-red-500  ">
										<FaArrowRight />
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="text-center pt-12">
				<button className=" btn btn-outline border-red-500 text-red-500 border-2 hover:bg-red-500 hover:border-red-500 hover:text-white">
					More Services
				</button>
			</div>
		</div>
	);
};

export default Services;
