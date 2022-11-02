import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
	return (
		<div className="hero  py-10">
			<div className="hero-content flex-col lg:flex-row">
				<div className="md:w-1/2 relative ">
					<img
						src={person}
						alt=""
						className=" lg:w-4/5 h-full rounded-lg shadow-2xl"
					/>
					<img
						className=" lg:max-w-sm  absolute  lg:right-4 top-1/2 bg-white   lg:h-[220px] lg:w-[250px] p-2 rounded-xl"
						src={parts}
						alt=""
					/>
				</div>
				<div className="md:w-1/2 lg:pt-0 md:pt-36 sm:pt-60 pt-44">
					<h4 className="text-red-500 text-xl  pb-2 font-bold">About Us</h4>
					<h1 className="md:text-5xl text-4xl font-bold">
						We are qualified <br /> & of experience <br /> in this field
					</h1>
					<p className="pt-6">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable.
					</p>
					<p className="py-6">
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable.
					</p>
					<button className="btn bg-red-500 border-none hover:bg-red-600">
						Get More Info
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
