import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '../Components/List';
import DoneIcon from '@material-ui/icons/Done';
import Done from '@material-ui/icons/Done';

const Admin = props => {
	const [orderList, setOrderList] = useState([]);
    const { type } = props;

	useEffect(() => {
        let mounted = true;
        axios.get(`http://localhost:8000/api/get/${type}`)
            .then(res => {
                if (mounted) {
                    setOrderList(res.data.results);
                }
                console.log(res.data);
            })
            .catch(err => console.log(err));
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
                            <td>{ order.base }</td>
                            <td><List order={ order } category={ "proteins" } /></td>
                            <td><List order={ order } category={ "sauces" } /></td>
                            <td><List order={ order } category={ "sides" } /></td>
                            <td><List order={ order } category={ "toppings" } /></td>
                            <td>{ order.requests }</td>
							{
								!order.pickedUp ?
								<td><DoneIcon onClick={ () => pickedUp(order) } /></td> :
								<td></td>
							}
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
};

export default Admin;