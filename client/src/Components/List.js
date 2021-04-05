import React from 'react';

const List = props => {
    const { order, category } = props;

    return (
        <ul>
            {
                order[category].map((item, i) => <li key={i}>{ item }</li>)
            }
        </ul>
    )
};

export default List;