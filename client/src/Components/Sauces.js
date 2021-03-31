import React from 'react';
import housePoke from '../Images/sauces/house-poke.png';
import srirachaAioli from '../Images/sauces/sriracha-aioli.png';
import wasabiAioli from '../Images/sauces/wasabi-aioli.png';
import zestyPonzu from '../Images/sauces/zesty-ponzu.png';

const Sauces = props => {
	const { order, setOrder } = props;

	const checkHandler = e => {
		let newSauces;
        if (e.target.checked) {
            newSauces = [...order.sauces, e.target.name];
        } else {
            newSauces = order.sauces.filter((item) => item !== e.target.name);
        }
        setOrder({
            ...order,
            sauces: newSauces
        });
	}

    return (
        <div className="ingredients">
            <div>
				<input type="checkbox" name="House Poke" className="checkbox" id="house-poke" onChange={ checkHandler } />
				<label className="label" htmlFor="house-poke">
					<h3>House Poke</h3>
					<img src={ housePoke } alt="house poke sauce" />
				</label>
			</div>
            <div>
				<input type="checkbox" name="Sriracha Aioli" className="checkbox" id="sriracha" onChange={ checkHandler } />
				<label className="label" htmlFor="sriracha">
					<h3>Sriracha Aioli</h3>
					<img src={ srirachaAioli } alt="sriracha aioli sauce" />
				</label>
			</div>
            <div>
				<input type="checkbox" name="Wasabi Aioli" className="checkbox" id="wasabi-aioli" onChange={ checkHandler } />
				<label className="label" htmlFor="wasabi-aioli">
					<h3>Wasabi Aioli</h3>
					<img src={ wasabiAioli } alt="wasabi aioli sauce" />
				</label>
			</div>
            <div>
				<input type="checkbox" name="Zesty Ponzu" className="checkbox" id="zesty-ponzu" onChange={ checkHandler } />
				<label className="label" htmlFor="zesty-ponzu">
					<h3>Zesty Ponzu</h3>
					<img src={ zestyPonzu } alt="zesty ponzu sauce" />
				</label>
			</div>
        </div>
    )
};

export default Sauces;