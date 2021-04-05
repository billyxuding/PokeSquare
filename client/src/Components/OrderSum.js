import React from 'react';
import { Card } from '@material-ui/core';
import List from './List';


const OrderSum = props => {
    const { order, category } = props;

    const header = `${category.substring(0, 1).toUpperCase()}${category.substring(1)}:`;

    return (
        <Card variant="outlined" className="order-sum">
            <span className="header">{ header }</span>
            {
                category === "base" ?
                    order.base ?
                    <span>{ order.base }</span> :
                    <span>None</span>
                :
                order[category].length > 0 ?
                <List order={ order } category={ category } /> :
                <span>None</span>
            }
        </Card>
    )
};

export default OrderSum;