import React from "react";
import "./BannerItem.css";

const BannerItem = ({ data }) => {
	const { prev, id, next, image } = data;
	return (
		<div id={`slide${id}`} className="carousel-item relative   w-full">
			<div className="img-gradient">
				<img alt="slider" src={image} className=" w-full    " />
			</div>
			<div className="absolute  left-24 top-1/4   transform -translate-y-1/2 gap-5 right-10 ">
				<h1 className="text-6xl font-bold text-white">
					Affordable <br /> Price For Car <br /> Servicing
				</h1>
			</div>
			<div className="absolute  left-24 top-1/2 w-2/5  transform -translate-y-1/2 gap-5 right-10 ">
				<p className="text-bold text-xl text-white">
					There are many variations of passages of available, but the majority
					have suffered alteration in some form
				</p>
			</div>
			<div className="absolute flex  left-24 top-3/4 w-2/5  transform -translate-y-1/2 gap-5 right-10 ">
				<button className="btn bg-red-600 hover:bg-red-700">
					Discover More
				</button>
				<button className="btn btn-outline border-gray-100 text-white">
					Latest Project
				</button>
			</div>
			<div className="absolute flex justify-end  bottom-0 transform -translate-y-1/2 gap-3 right-10 ">
				<a
					href={`#slide${prev}`}
					className="btn bg-gray-600 opacity-60 hover:bg-gray-700 border-none btn-circle">
					❮
				</a>
				<a
					href={`#slide${next}`}
					className="btn bg-red-500 border-none hover:bg-red-600 btn-circle">
					❯
				</a>
			</div>
		</div>
	);
};

export default BannerItem;
