import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Menu from './Views/Menu';
import ConfirmOrder from './Views/ConfirmOrder';

function App() {
	const [order, setOrder] = useState({
		fname: "",
		lname: "",
		email: "",
		base: "",
		proteins: [],
		sauces: [],
		sides: [],
		toppings: [],
		requests: ""
	});

	return (
		<>
			<Router>
				<Menu path="/order" order={ order } setOrder={ setOrder } />
				<ConfirmOrder path="/order/confirm" order={ order } setOrder={ setOrder } />
			</Router>
		</>
	);
}

export default App;