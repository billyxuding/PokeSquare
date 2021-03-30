import React, { useState } from 'react';
import whiteRice from '../Images/bases/white-rice.png'

const Menu = () => {
	const [bowl, setBowl] = useState({
		base: "",
		proteins: [],
		sauces: []
	});

	const submitHandler = e => {
	}

    return (
        <>
			<ul>
				<li>Base: { bowl.base }</li>
				<li>Proteins: { bowl.proteins }</li>
				<li>Sauces: { bowl.sauces }</li>
			</ul>
			<form className="menu" onSubmit={ submitHandler }>
				<h2>Choose A Base</h2>
				<input type="radio" name="base" value="white rice" id="white-rice" onChange={ e => setBowl({ ...bowl, [e.target.name]: e.target.value })} />
				<label htmlFor="white-rice">White Rice <img src={ whiteRice } alt="white rice"/></label>
				<input type="radio" name="base" value="brown rice" id="brown-rice" onChange={ e => setBowl({ ...bowl, [e.target.name]: e.target.value })} />
				<label htmlFor="brown-rice">Brown Rice</label>
				<input type="radio" name="base" value="salad" id="salad" onChange={ e => setBowl({ ...bowl, [e.target.name]: e.target.value })} />
				<label htmlFor="salad">Salad</label>
			</form>
        </>
    )
};

export default Menu;