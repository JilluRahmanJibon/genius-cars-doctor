import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
	const { id } = useParams();

	useEffect(() => {
		fetch(`http://localhost:8000/services/${id}`)
			.then(res => res.json())
			.then(data => console.log(data));
	}, []);
	return <div></div>;
};

export default CheckOut;
