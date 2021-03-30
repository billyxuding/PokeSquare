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
			<p>Base: { order.base }</p>
			<p>
				Proteins:
				<ul>
					{
						order.proteins.map((item, i) => <li key={i}>{ item }</li>)
					}
				</ul>
			</p>
			<h2>Choose A Base</h2>
			<Bases order={ order } setOrder={ setOrder } />
			<h2>Choose Your Proteins</h2>
			<Proteins order={ order } setOrder={ setOrder } />
		</div>
	);
}

export default App;