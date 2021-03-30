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
				<span className="block subheader1">Every Bowl Is Made To Order</span>
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
			<h2>
				Base
				<span className="block subheader2">Choose 1</span>
			</h2>
			<Bases order={ order } setOrder={ setOrder } />
			<h2>
				Proteins
				<span className="block subheader2">Choose 2 &#40;regular&#41; or 3 &#40;large&#41; proteins</span>
			</h2>
			<Proteins order={ order } setOrder={ setOrder } />
			<h2>Sauces</h2>
		</div>
	);
}

export default App;