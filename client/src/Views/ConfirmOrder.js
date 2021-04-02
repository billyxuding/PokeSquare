import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { loadStripe } from '@stripe/stripe-js';
import List from '../Components/List';
import OrderSum from '../Components/OrderSum';

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
            <h1>Please confirm your order</h1>
			<OrderSum order={ order } header={ "Base:" } category={ "base" } />
			<OrderSum order={ order } header={ "Proteins:" } category={ "proteins" } />
			<OrderSum order={ order } header={ "Sauces:" } category={ "sauces" } />
			<OrderSum order={ order } header={ "Sides:" } category={ "sides" } />
			<OrderSum order={ order } header={ "Toppings:" } category={ "toppings" } />
			<Link to="/order"><button className="edit-order">Edit Order</button></Link>
			<span className="block">Special Requests:</span>
			<textarea name="requests" cols="30" rows="5" onChange={ changeHandler }></textarea>
			<p>Order Total: $14.95</p>
			<p className="required">*required</p>
            <div className="cust-info">
                <label htmlFor="fname">First Name:</label>
                <input type="text" name="fname" onChange={ changeHandler } />
            </div>
			<div className="cust-info">
				<label htmlFor="lname">Last Name:</label>
				<input type="text" name="lname" onChange={ changeHandler } />
			</div>
			<button className="checkout" role="link" onClick={ checkoutHandler }>Continue To Checkout</button>
        </>
    )
};

export default ConfirmOrder;