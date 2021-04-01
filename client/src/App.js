import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Menu from './Views/Menu';
import ConfirmOrder from './Views/ConfirmOrder';
import Success from './Views/Success';
import Cancel from './Views/Cancel';
import Admin from './Views/Admin';

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
				<Success path="/success" />
				<Cancel path="/cancel" />
				<Admin path="/admin/all" type="all" />
				<Admin path="/admin/pending" type="pending" />
			</Router>
		</>
	);
}

export default App;