import React, { useEffect, useState } from "react";

const OrderRow = ({ order, setOrders, orders }) => {
	const { customer, price, service, _id, status, serviceName, phone } = order;
	const [orderService, setOrderService] = useState({});
	useEffect(() => {
		fetch(`http://localhost:8000/services/${service}`)
			.then(res => res.json())
			.then(data => setOrderService(data));
	}, [service]);

	const handleDelete = id => {
		const proceed = window.confirm(
			`are you sure, you want to cancel this "${serviceName}" order?`
		);
		if (proceed) {
			fetch(`http://localhost:8000/orders/${id}`, { method: "DELETE" })
				.then(res => res.json())
				.then(result => {
					if (result.deletedCount > 0) {
						const remaining = orders.filter(odr => odr._id !== id);
						setOrders(remaining);
					}
				});
		} else {
			console.log("no deleted");
		}
	};

	const handleUpdate = id => {
		fetch(`http://localhost:8000/orders/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ status: "Approved" }),
		})
			.then(res => res.json())
			.then(result => {
				if (result.modifiedCount > 0) {
					const remaining = orders.filter(odr => odr._id !== id);
					const updateOdr = orders.find(odr => odr._id === id);
					updateOdr.status = "approved";
					const newService = [updateOdr, ...remaining];
					setOrders(newService);
				}
			});
	};
	return (
		<tr>
			<th>
				<label>
					<button
						onClick={() => handleDelete(_id)}
						className="btn btn-square btn-outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</label>
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							{orderService?.img && (
								<img
									src={orderService.img}
									alt="Avatar Tailwind CSS Component"
								/>
							)}
						</div>
					</div>
					<div>
						<div className="font-bold">{customer}</div>
						<div className="text-sm opacity-50">{phone}</div>
					</div>
				</div>
			</td>
			<td>
				{serviceName}
				<br />
				<span className="badge badge-ghost badge-sm">${price}</span>
			</td>
			<td>Purple</td>
			<th>
				<button
					onClick={() => handleUpdate(_id)}
					className="btn btn-ghost btn-xs">
					{status ? status : "pending"}
				</button>
			</th>
		</tr>
	);
};

export default OrderRow;