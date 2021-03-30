import React, { useState } from 'react';
import tuna from '../Images/proteins/tuna.png';
import salmon from '../Images/proteins/salmon.png';
import shrimp from '../Images/proteins/shrimp.png';

const Proteins = props => {
    const { order, setOrder } = props;
    const [addTuna, setAddTuna] = useState(false);
    const [addSalmon, setAddSalmon] = useState(false);
    const [addShrimp, setAddShrimp] = useState(false);

    return (
        <div>
            <h2>Choose Your Proteins</h2>
            <input
                type="checkbox" id="tuna" checked={ addTuna }
                onChange={ e => {
                    setAddTuna(e.target.checked);
                    if (e.target.checked) {
                        setOrder({
                            ...order,
                            proteins: [...order.proteins, "tuna"]
                        });
                    }
                }} />
            <label htmlFor="tuna">
                Tuna
                <img src={ tuna } alt="tuna" />
            </label>
            <input
                type="checkbox" id="salmon" checked={ addSalmon }
                onChange={ e => {
                    setAddSalmon(e.target.checked);
                    if (e.target.checked) {
                        setOrder({
                            ...order,
                            proteins: [...order.proteins, "salmon"]
                        });
                    }
                }} />
            <label htmlFor="salmon">
                Salmon
                <img src={ salmon } alt="salmon" />
            </label>
            <input
                type="checkbox" id="shrimp" checked={ addShrimp }
                onChange={ e => {
                    setAddShrimp(e.target.checked);
                    if (e.target.checked) {
                        setOrder({
                            ...order,
                            proteins: [...order.proteins, "shrimp"]
                        });
                    }
                }} />
            <label htmlFor="shrimp">
                Shrimp
                <img src={ shrimp } alt="shrimp" />
            </label>
        </div>
    )
};

export default Proteins;