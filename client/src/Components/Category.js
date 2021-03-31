import React from 'react';
import crabSalad from '../Images/sides/crab-salad.png';

const Category = props => {
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
        <div className="ingredients">
            <div>
                <input type="checkbox" name="Crab Salad" className="checkbox" id="crab-salad" onChange={ checkHandler } />
                <label className="label" htmlFor="crab-salad">
                    <h3>Crab Salad</h3>
                    <img src={ crabSalad } alt="crab salad" />
                </label>
            </div>
        </div>
    )
};

export default Category;