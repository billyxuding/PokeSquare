import React from 'react';

const CustomerInfo = props => {
	const { order, setOrder } = props;

	const changeHandler = e => {
		setOrder({
			...order,
			[e.target.name]: e.target.value
		});
	}

    return (
        <>
            <h1>Please fill out the information below</h1>
            <div className="cust-info">
                <label htmlFor="fname">First Name:</label>
                <input type="text" name="fname" onChange={ changeHandler } />
            </div>
			<div className="cust-info">
				<label htmlFor="lname">Last Name:</label>
				<input type="text" name="lname" onChange={ changeHandler } />
			</div>
			<p>customer info: { order.fname } { order.lname }</p>
        </>
    )
};

export default CustomerInfo;