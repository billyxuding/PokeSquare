import React, { useState } from 'react';
import './App.css';
import Menu from './Views/Menu';

function App() {
	const [order, setOrder] = useState({
		base: "",
		proteins: [],
		sauces: [],
		sides: [],
		toppings: []
	});

	return (
		<div className="App">
			<h1>
				Create Your Bowl<br />
				<span className="block subheader1">Every Bowl Is Made To Order</span>
			</h1>
			<p>What you've got so far:</p>
			<p>Base: { order.base }</p>
			<p>Proteins:</p>
			<ul>
				{
					order.proteins.map((item, i) => <li key={i}>{ item }</li>)
				}
			</ul>
			<p>Sauces:</p>
			<ul>
				{
					order.sauces.map((item, i) => <li key={i}>{ item }</li>)
				}
			</ul>
			<Menu order={ order } setOrder={ setOrder } />
		</div>
	);
}

export default App;