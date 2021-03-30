import React from 'react';
import tuna from '../Images/proteins/tuna.png';
import salmon from '../Images/proteins/salmon.png';
import shrimp from '../Images/proteins/shrimp.png';

const Proteins = props => {
    const { order, setOrder } = props;

    const checkHandler = e => {
        let newProteins;
        if (e.target.checked) {
            newProteins = [...order.proteins, e.target.name];
        } else {
            newProteins = order.proteins.filter((item) => item !== e.target.name);
        }
        setOrder({
            ...order,
            proteins: newProteins
        });
    }

    return (
        <div className="section">
            <div>
                <input type="checkbox" name="tuna" id="tuna" onChange={ checkHandler } />
                <label htmlFor="tuna">
                    <h3>Tuna</h3>
                    <img src={ tuna } alt="tuna" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="salmon" id="salmon" onChange={ checkHandler } />
                <label htmlFor="salmon">
                    <h3>Salmon</h3>
                    <img src={ salmon } alt="salmon" />
                </label>
            </div>
            <div>
                <input type="checkbox" name="shrimp" id="shrimp" onChange={ checkHandler } />
                <label htmlFor="shrimp">
                    <h3>Shrimp</h3>
                    <img src={ shrimp } alt="shrimp" />
                </label>
            </div>
        </div>
    )
};

export default Proteins;