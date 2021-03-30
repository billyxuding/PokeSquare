import React, { useState } from 'react';
import whiteRice from '../Images/bases/white-rice.png';
import brownRice from '../Images/bases/brown-rice.png';
import salad from '../Images/bases/salad.png';

const Menu = () => {
	const [order, setOrder] = useState({
		base: "",
		proteins: [],
		sauces: []
	});

    return (
        <>
			<ul>
				<li>Base: { order.base }</li>
				<li>Proteins: { order.proteins }</li>
				<li>Sauces: { order.sauces }</li>
			</ul>
			<h2>Choose A Base</h2>
			<input
				type="radio" name="base" value="white rice" id="white-rice"
				onChange={ e => setOrder({ ...order, [e.target.name]: e.target.value })} />
			<label htmlFor="white-rice">
				White Rice
				<img src={ whiteRice } alt="white rice" />
			</label>
			<input
				type="radio" name="base" value="brown rice" id="brown-rice"
				onChange={ e => setOrder({ ...order, [e.target.name]: e.target.value })} />
			<label htmlFor="brown-rice">
				Brown Rice
				<img src={ brownRice } alt="brown rice" />
			</label>
			<input
				type="radio" name="base" value="salad" id="salad"
				onChange={ e => setOrder({ ...order, [e.target.name]: e.target.value })} />
			<label htmlFor="salad">
				Salad
				<img src={ salad } alt="salad"/>
			</label>
        </>
    )
};

export default Menu;