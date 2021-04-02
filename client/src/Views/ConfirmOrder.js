import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { loadStripe } from '@stripe/stripe-js';
import OrderSum from '../Components/OrderSum';
import { Paper, Button, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const stripePromise = loadStripe('pk_test_51IbJ6LBx7QZ9wBYORs1GSwYq7yj0ey11eFhuR3Un7KZvgxaOoMznUne1GBwgGP36BiN3otTyTJA4fYNs4727Dqvr00WAbqpvoj'); // public test key linked to Stripe account

const ConfirmOrder = props => {
	const { order, setOrder } = props;
	
	const changeHandler = e => {
		setOrder({
			...order,
			[e.target.name]: e.target.value
		});
	};

	const checkoutHandler = async (event) => {
		axios.post("http://localhost:8000/api/new", order)
			.then(res => console.log("response:", res.data))
			.catch(err => console.log("error:", err));

		// Get Stripe.js instance
		const stripe = await stripePromise;

		// Call backend to create the Checkout Session
		const response = await fetch('http://localhost:8000/create-checkout-session', { method: 'POST' });
		const session = await response.json();

		// When user clicks on the button, redirect to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
		  // If `redirectToCheckout` fails due to a browser or network
		  // error, display the localized error message to your customer
		  // using `result.error.message`.
		}
	};

    return (
        <>
			<Paper elevation={ 24 } className="confirm-order-paper">
				<h1>Please confirm your order</h1>
				<OrderSum order={ order } category={ "base" } />
				<OrderSum order={ order } category={ "proteins" } />
				<OrderSum order={ order } category={ "sauces" } />
				<OrderSum order={ order } category={ "sides" } />
				<OrderSum order={ order } category={ "toppings" } />
				<Link to="/order" className="remove-underline">
					<Button variant="outlined" color="secondary" size="small" style={{ margin: 8 }}>
						<span>edit order</span>
						<EditIcon />
					</Button>
				</Link>
				<div className="cust-info">
					<TextField
						required
						label="First Name"
						variant="outlined"
						size="small"
						style={{ margin: 8 }}
						name="fname"
						onChange={ changeHandler }
					/>
					<TextField
						required
						label="Last Name"
						variant="outlined"
						size="small"
						style={{ margin: 8 }}
						name="lname"
						onChange={ changeHandler }
					/>
				</div>
				<div className="cust-info">
					<TextField
						multiline
						label="Special Requests"
						variant="outlined"
						rows={4}
						style={{ margin: 8 }}
						name="requests"
						onChange={ changeHandler }
					/>
				</div>
				<p className="skinny">Order Total: $14.95</p>
				<Button variant="contained" color="primary" size="large" role="link" onClick={ checkoutHandler }>
					<span>checkout</span>
					<AddShoppingCartIcon />
				</Button>
			</Paper>
        </>
    )
};

export default ConfirmOrder;