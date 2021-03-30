import React from 'react';
import tuna from '../Images/proteins/tuna.png';
import salmon from '../Images/proteins/salmon.png';
import shrimp from '../Images/proteins/shrimp.png';
import albacore from '../Images/proteins/albacore.png';
import tako from '../Images/proteins/tako.png';
import spicyTuna from '../Images/proteins/spicy-tuna.png';
import scallops from '../Images/proteins/scallop.png';
import tofu from '../Images/proteins/tofu.png';

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
                <div>
                    <input type="checkbox" name="albacore" id="albacore" onChange={ checkHandler } />
                    <label htmlFor="albacore">
                        <h3>Albacore</h3>
                        <img src={ albacore } alt="albacore" />
                    </label>
                </div>
            </div>
            <div className="section">
                <div>
                    <input type="checkbox" name="tako" id="tako" onChange={ checkHandler } />
                    <label htmlFor="tako">
                        <h3>Tako</h3>
                        <img src={ tako } alt="tako" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="spicy-tuna" id="spicy-tuna" onChange={ checkHandler } />
                    <label htmlFor="spicy-tuna">
                        <h3>Spicy Tuna</h3>
                        <img src={ spicyTuna } alt="spicy-tuna" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="scallops" id="scallops" onChange={ checkHandler } />
                    <label htmlFor="scallops">
                        <h3>Scallops</h3>
                        <img src={ scallops } alt="scallops" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="tofu" id="tofu" onChange={ checkHandler } />
                    <label htmlFor="tofu">
                        <h3>Tofu</h3>
                        <img src={ tofu } alt="tofu" />
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Proteins;