import { useState } from 'react';
import './App.css';
import Menu from './Components/Menu';
import React from 'react';

function App() {
	const [order, setOrder] = useState({
		base: "",
		proteins: [],
		sauces: []
	});

	return (
		<div className="App">
			<h1>
				Create Your Bowl<br />
				<span className="block made-to-order">Every Bowl Is Made To Order</span>
			</h1>
			<Menu order={ order } setOrder={ setOrder } />
		</div>
	);
}

export default App;