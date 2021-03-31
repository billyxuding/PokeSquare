import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
	const [orderList, setOrderList] = useState([]);

	useEffect(() => {
        let mounted = true;
        axios.get("http://localhost:8000/api/get")
            .then(res => {
                if (mounted) {
                    setOrderList(res.data.results);
                }
            })
            .catch(err => console.log(err));
        return () => mounted = false;
    }, [orderList]);

    return (
        <>
            <h1>All Orders</h1>
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
                    orderList.map((order, i) =>
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
										order.proteins.map((protein, i) =>
											<li key={i}>{ protein }</li>
										)
									}
								</ul>
							</td>
                            <td>{ order.requests }</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
};

export default Admin;