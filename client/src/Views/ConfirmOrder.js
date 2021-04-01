import React from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IbJ6LBx7QZ9wBYORs1GSwYq7yj0ey11eFhuR3Un7KZvgxaOoMznUne1GBwgGP36BiN3otTyTJA4fYNs4727Dqvr00WAbqpvoj'); // public test key linked to Stripe account

const ConfirmOrder = props => {
	const { order, setOrder } = props;
	
	const changeHandler = e => {
		setOrder({
			...order,
			[e.target.name]: e.target.value
		});
	};
	
	const submitHandler = e => {
		e.preventDefault();
		axios.post("http://localhost:8000/api/new", order)
		.then(res => {
			console.log("response:", res.data);
			if (res.data.message === "success") {
				navigate("/success");
			} else {
				// set error messages
			}
		})
		.catch(err => console.log("error:", err))
	};

	const checkoutHandler = async (event) => {
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
			<div className="order-sum">
				<span>Base:</span>
				{
					order.base ?
					<span>{ order.base }</span> :
					<span>None</span>
				}
			</div>
			<div className="order-sum">
				<span>Proteins:</span>
				{
					order.proteins.length > 0 ?
					<ul>
						{
							order.proteins.map((item, i) => <li key={i}>{ item }</li>)
						}
					</ul> :
					<span>None</span>
				}
			</div>
			<div className="order-sum">
				<span>Sauces:</span>
				{
					order.sauces.length > 0 ?
					<ul>
						{
							order.sauces.map((item, i) => <li key={i}>{ item }</li>)
						}
					</ul> :
					<span>None</span>
				}
			</div>
			<div className="order-sum">
				<span>Sides:</span>
				{
					order.sides.length > 0 ?
					<ul>
						{
							order.sides.map((item, i) => <li key={i}>{ item }</li>)
						}
					</ul> :
					<span>None</span>
				}
			</div>
			<div className="order-sum">
				<span>Toppings:</span>
				{
					order.toppings.length > 0 ?
					<ul>
						{
							order.toppings.map((item, i) => <li key={i}>{ item }</li>)
						}
					</ul> :
					<span>None</span>
				}
			</div>
			<Link to="/order"><button className="edit-order">Edit Order</button></Link>
			<span className="block">Special Requests:</span>
			<textarea name="requests" cols="30" rows="5" onChange={ changeHandler }></textarea>
			<p className="required">*required</p>
            <div className="cust-info">
                <label htmlFor="fname">First Name:</label>
                <input type="text" name="fname" onChange={ changeHandler } />
            </div>
			<div className="cust-info">
				<label htmlFor="lname">Last Name:</label>
				<input type="text" name="lname" onChange={ changeHandler } />
			</div>
			<button className="place-order" onClick={ submitHandler }>Place Order</button>
			<button role="link" onClick={ checkoutHandler }>Checkout</button>
        </>
    )
};

export default ConfirmOrder;