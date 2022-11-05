import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
	const { user, signOutUser } = useContext(AuthContext);
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		fetch(
			`https://genius-car-server-xi-one.vercel.app/orders?email=${user?.email}`,
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem("genius-token")}`,
				},
			}
		)
			.then(res => {
				if (res.status === 401 || res.status === 403) {
					return signOutUser();
				}
				return res.json();
			})
			.then(result => setOrders(result));
	}, [user?.email, signOutUser]);
	return (
		<div>
			<h1 className="text-center">You have {orders?.length} Orders.</h1>
			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Delete</th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
							<th>Message</th>
						</tr>
					</thead>
					<tbody>
						{orders.map(order => (
							<OrderRow
								orders={orders}
								setOrders={setOrders}
								order={order}
								key={order._id}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Orders;
