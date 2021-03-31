import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Menu from './Views/Menu';
import CustomerInfo from './Views/CustomerInfo';

function App() {
	const [order, setOrder] = useState({
		base: "",
		proteins: [],
		sauces: [],
		sides: [],
		toppings: [],
		requests: "",
		fname: "",
		lname: ""
	});

	return (
		<>
			<Router>
				<Menu path="/order" order={ order } setOrder={ setOrder } />
				<CustomerInfo path="/order/confirm" order={ order } setOrder={ setOrder } />
			</Router>
		</>
	);
}

export default App;