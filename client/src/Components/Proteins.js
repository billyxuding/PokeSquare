import React from 'react';

const Proteins = props => {
    const { order, setOrder } = props;
    let counter = 0; // cannot be more than 3

    const checkHandler = e => {
        
    }

    return (
        <div>
            <h2>Choose Your Proteins</h2>
            <label htmlFor="tuna">Tuna</label>
            <input type="checkbox" id="tuna" checked={ false } onChange={ checkHandler } />
        </div>
    )
};

export default Proteins;