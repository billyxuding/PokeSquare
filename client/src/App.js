import React, { useState } from 'react';
import './App.css';
import Bases from './Components/Bases';
import Proteins from './Components/Proteins';

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
			<p>What you've got so far:</p>
			<ul>
				<li>Base: { order.base }</li>
				<li>Proteins: { order.proteins }</li>
				<li>Sauces: { order.sauces }</li>
			</ul>
			<h2>Choose A Base</h2>
			<Bases order={ order } setOrder={ setOrder } />
			<Proteins order={ order } setOrder={ setOrder } />
		</div>
	);
}

export default App;