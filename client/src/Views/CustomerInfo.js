import React from 'react';

const CustomerInfo = props => {
	const { order, setOrder } = props;

	const changeHandler = e => {
		setOrder({
			...order,
			[e.target.name]: e.target.value
		});
	};

	const submitHandler = e => {
		e.preventDefault();
		// send post request with order object
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
			<span className="block">Special Requests:</span>
			<textarea name="requests" cols="30" rows="5" onChange={ e => setOrder({ ...order, [e.target.name]: e.target.value })}></textarea>
            <div className="cust-info">
                <label htmlFor="fname">First Name:</label>
                <input type="text" name="fname" onChange={ changeHandler } />
            </div>
			<div className="cust-info">
				<label htmlFor="lname">Last Name:</label>
				<input type="text" name="lname" onChange={ changeHandler } />
			</div>
			<button className="place-order" onClick={ submitHandler }>Place Order</button>
        </>
    )
};

export default CustomerInfo;