import React from 'react';
import List from './List';


const OrderSum = props => {
	const { order, header, category } = props;

	return (
		<div className="order-sum">
			<span>{ header }</span>
			{
				category === "base" ?
					order.base ?
					<span>{ order.base }</span> :
					<span>None</span>
				:
				order[category].length > 0 ?
				<List order={ order } category={ category } /> :
				<span>None</span>
			}
		</div>
	)
};

export default OrderSum;