import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = props => {
	const [orderList, setOrderList] = useState([]);
    const { type } = props;

	useEffect(() => {
        let mounted = true;
        if (type === "all") {
            axios.get("http://localhost:8000/api/get/all")
                .then(res => {
                    if (mounted) {
                        setOrderList(res.data.results);
                    }
					console.log(res.data);
                })
                .catch(err => console.log(err));
		} else {
			axios.get("http://localhost:8000/api/get/pending")
				.then(res => {
					if (mounted) {
						setOrderList(res.data.results);
					}
					console.log(res.data);
				})
				.catch(err => console.log(err));
        }
        return () => mounted = false;
    }, [type]);

    const pickedUp = thisOrder => {
		thisOrder.pickedUp = true;
		axios.put(`http://localhost:8000/api/${thisOrder._id}`, thisOrder)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
		setOrderList(orderList.filter(order => order._id !== thisOrder._id));
    }

    return (
        <>
            {
                type === "all" ?
                <h1>Order History</h1> :
                <h1>Pending Orders</h1>
            }
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Base</th>
                        <th>Proteins</th>
                        <th>Sauces</th>
                        <th>Sides</th>
                        <th>Toppings</th>
                        <th>Special Requests</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orderList.slice(0).reverse().map((order, i) => 
                        <tr key={i}>
                            <td>{ order.fname }</td>
                            <td>{ order.lname }</td>
                            <td>{ order.email }</td>
                            <td>{ order.base }</td>
                            <td>
								<ul>
									{
										order.proteins.map((protein, i) =>
											<li key={i}>{ protein }</li>
										)
									}
								</ul>
							</td>
                            <td>
								<ul>
									{
										order.sauces.map((sauce, i) =>
											<li key={i}>{ sauce }</li>
										)
									}
								</ul>
							</td>
                            <td>
								<ul>
									{
										order.sides.map((side, i) =>
											<li key={i}>{ side }</li>
										)
									}
								</ul>
							</td>
                            <td>
								<ul>
									{
										order.toppings.map((topping, i) =>
											<li key={i}>{ topping }</li>
										)
									}
								</ul>
							</td>
                            <td>{ order.requests }</td>
                            <td><button onClick={ () => pickedUp(order) }>Picked Up</button></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
};

export default Admin;