import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Card } from '@material-ui/core';
import OrderSum from '../Components/OrderSum';
import DoneIcon from '@material-ui/icons/Done';

const Admin = props => {
	const [orderList, setOrderList] = useState([]);
    const { route } = props;

	useEffect(() => {
        let mounted = true;
        axios.get(`http://localhost:8000/api/get/${route}`)
            .then(res => {
                if (mounted) {
                    setOrderList(res.data.results);
                }
                console.log(res.data);
            })
            .catch(err => console.log(err));
        return () => mounted = false;
    }, [route]);

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
                route === "all" ?
                <h1>Order History</h1> :
                <h1>Pending Orders</h1>
            }
            {
                orderList.slice(0).reverse().map((order, i) =>
                    <Paper key={i} elevation={ 2 } className="admin-view">
                        <Card variant="outlined" className="order-sum">
                            <span>First Name</span>
                            <span>{ order.fname }</span>
                        </Card>
                        <Card variant="outlined" className="order-sum">
                            <span>Last Name</span>
                            <span>{ order.lname }</span>
                        </Card>
                        <OrderSum order={ order } category="base" />
                        <OrderSum order={ order } category="proteins" />
                        <OrderSum order={ order } category="sauces" />
                        <OrderSum order={ order } category="sides" />
                        <OrderSum order={ order } category="toppings" />
                        <Card variant="outlined" className="order-sum">
                            <span>Requests</span>
                            {
                                order.requests ?
                                <span>{ order.requests }</span> :
                                <span>None</span>
                            }
                        </Card>
                        {
                            !order.pickedUp ?
                            <DoneIcon onClick={ () => pickedUp(order) } /> :
                            ""
                        }
                    </Paper>
                )
            }
        </>
    )
};

export default Admin;