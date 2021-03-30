import React from 'react';

const Proteins = props => {
    const { order, setOrder } = props;

    return (
        <div>
            <label htmlFor="tuna">Tuna</label>
            <input type="checkbox" checked={ false } />
        </div>
    )
};

export default Proteins;