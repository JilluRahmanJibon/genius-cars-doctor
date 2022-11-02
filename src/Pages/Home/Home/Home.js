import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../../Home/Services/Services";
const Home = () => {
	return (
		<div className="mb-10 ">
			<Banner />
			<About />
			<Services />
		</div>
	);
};

export default Home;
