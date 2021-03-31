import React from 'react';
import corn from '../Images/toppings/corn.png';
import drySeaweed from '../Images/toppings/dry-seaweed.png';
import friedGarlic from '../Images/toppings/fried-garlic.png';
import crispyOnion from '../Images/toppings/crispy-onion.png';
import masago from '../Images/toppings/masago.png';
import greenOnion from '../Images/toppings/green-onion.png';
import furikake from '../Images/toppings/furikake.png';
import edamame from '../Images/toppings/edamame.png';
import sesameSeeds from '../Images/toppings/sesame-seeds.png';

const Toppings = props => {
	const { order, setOrder } = props;

	const checkHandler = e => {
        let newToppings;
        if (e.target.checked) {
            newToppings = [...order.toppings, e.target.name];
        } else {
            newToppings = order.toppings.filter((item) => item !== e.target.name);
        }
        setOrder({
            ...order,
            toppings: newToppings
        });
    }

    return (
        <div className="ingredients">
            <div>
                <input type="checkbox" name="Corn" className="checkbox" id="corn" onChange={ checkHandler } />
                <label className="label" htmlFor="corn">
                    <h3>Corn</h3>
                    <img src={ corn } alt="corn" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="Dry Seaweed" className="checkbox" id="dry-seaweed" onChange={ checkHandler } />
                <label className="label" htmlFor="dry-seaweed">
                    <h3>Dry Seaweed</h3>
                    <img src={ drySeaweed } alt="dry seaweed" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="Fried Garlic" className="checkbox" id="fried-garlic" onChange={ checkHandler } />
                <label className="label" htmlFor="fried-garlic">
                    <h3>Fried Garlic</h3>
                    <img src={ friedGarlic } alt="fried garlic" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="Crispy Onion" className="checkbox" id="crispy-onion" onChange={ checkHandler } />
                <label className="label" htmlFor="crispy-onion">
                    <h3>Crispy Onion</h3>
                    <img src={ crispyOnion } alt="crispy onion" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="Masago" className="checkbox" id="masago" onChange={ checkHandler } />
                <label className="label" htmlFor="masago">
                    <h3>Masago</h3>
                    <img src={ masago } alt="masago" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="Green Onion" className="checkbox" id="green-onion" onChange={ checkHandler } />
                <label className="label" htmlFor="green-onion">
                    <h3>Green Onion</h3>
                    <img src={ greenOnion } alt="green onion" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="Furikake" className="checkbox" id="furikake" onChange={ checkHandler } />
                <label className="label" htmlFor="furikake">
                    <h3>Furikake</h3>
                    <img src={ furikake } alt="furikake" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="Edamame" className="checkbox" id="edamame" onChange={ checkHandler } />
                <label className="label" htmlFor="edamame">
                    <h3>Edamame</h3>
                    <img src={ edamame } alt="edamame" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="Sesame Seeds" className="checkbox" id="sesame-seeds" onChange={ checkHandler } />
                <label className="label" htmlFor="sesame-seeds">
                    <h3>Sesame Seeds</h3>
                    <img src={ sesameSeeds } alt="sesame seeds" />
                </label>
            </div>
        </div>
    )
};

export default Toppings;