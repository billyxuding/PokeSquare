import React from 'react';
import whiteRice from '../Images/bases/white-rice.png';
import brownRice from '../Images/bases/brown-rice.png';
import salad from '../Images/bases/salad.png';

const Bases = props => {
	const { order, setOrder } = props;

	const selectHandler = e => {
		setOrder({
			...order,
			[e.target.name]: e.target.value
		})
	}

    return (
        <div className="section">
			<div>
				<input type="radio" name="base" value="White Rice" className="checkbox" id="white-rice" onChange={ selectHandler } />
				<label className="label" htmlFor="white-rice">
					<h3>White Rice</h3>
					<img src={ whiteRice } alt="white rice" />
				</label>
			</div>
			<div>
				<input type="radio" name="base" value="Brown Rice" className="checkbox" id="brown-rice" onChange={ selectHandler } />
				<label className="label" htmlFor="brown-rice">
					<h3>Brown Rice</h3>
					<img src={ brownRice } alt="brown rice" />
				</label>
			</div>
			<div>
				<input type="radio" name="base" value="Spring Mix Salad" className="checkbox" id="salad" onChange={ selectHandler } />
				<label className="label" htmlFor="salad">
					<h3>Spring Mix Salad</h3>
					<img src={ salad } alt="salad"/>
				</label>
			</div>
        </div>
    )
};

export default Bases;