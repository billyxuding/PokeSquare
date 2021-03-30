import React from 'react';
import crabSalad from '../Images/sides/crab-salad.png';
import seaweedSalad from '../Images/sides/seaweed-salad.png';
import avocado from '../Images/sides/avocado.png';
import cucumber from '../Images/sides/cucumber.png';
import onions from '../Images/sides/onions.png';
import pickledGinger from '../Images/sides/pickled-ginger.png';
import wasabi from '../Images/sides/wasabi.png';

const Sides = props => {
	const { order, setOrder } = props;

	const checkHandler = e => {
        let newSides;
        if (e.target.checked) {
            newSides = [...order.sides, e.target.name];
        } else {
            newSides = order.sides.filter((item) => item !== e.target.name);
        }
        setOrder({
            ...order,
            sides: newSides
        });
    }

    return (
        <div>
            <div className="section">
                <div>
                    <input type="checkbox" name="Crab Salad" className="checkbox" id="crab-salad" onChange={ checkHandler } />
                    <label className="label" htmlFor="crab-salad">
                        <h3>Crab Salad</h3>
                        <img src={ crabSalad } alt="crab salad" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="Seaweed Salad" className="checkbox" id="seaweed-salad" onChange={ checkHandler } />
                    <label className="label" htmlFor="seaweed-salad">
                        <h3>Seaweed Salad</h3>
                        <img src={ seaweedSalad } alt="seaweed salad" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="Avocado" className="checkbox" id="avocado" onChange={ checkHandler } />
                    <label className="label" htmlFor="avocado">
                        <h3>Avoado</h3>
                        <img src={ avocado } alt="avocado" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="Cucumber" className="checkbox" id="cucumber" onChange={ checkHandler } />
                    <label className="label" htmlFor="cucumber">
                        <h3>Cucumber</h3>
                        <img src={ cucumber } alt="cucumber" />
                    </label>
                </div>
            </div>
            <div className="section">
                <div>
                    <input type="checkbox" name="Onions" className="checkbox" id="onions" onChange={ checkHandler } />
                    <label className="label" htmlFor="onions">
                        <h3>Onions</h3>
                        <img src={ onions } alt="onions" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="Pickled Ginger" className="checkbox" id="pickled-ginger" onChange={ checkHandler } />
                    <label className="label" htmlFor="pickled-ginger">
                        <h3>Pickled Ginger</h3>
                        <img src={ pickledGinger } alt="pickled-ginger" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="Wasabi" className="checkbox" id="wasabi" onChange={ checkHandler } />
                    <label className="label" htmlFor="wasabi">
                        <h3>Wasabi</h3>
                        <img src={ wasabi } alt="wasabi" />
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Sides;