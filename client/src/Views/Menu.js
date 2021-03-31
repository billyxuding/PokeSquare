import React from 'react';
import Bases from '../Components/Bases';
import Proteins from '../Components/Proteins';
import Sauces from '../Components/Sauces';
import Sides from '../Components/Sides';
import Toppings from '../Components/Toppings';

const Menu = props => {
    const { order, setOrder } = props;

    return (
        <div>
            <h2>
				Base
				<span className="block subheader2">Choose 1</span>
			</h2>
			<Bases order={ order } setOrder={ setOrder } />
			<h2>
				Proteins
				<span className="block subheader2">Choose 2 &#40;regular&#41; or 3 &#40;large&#41; proteins</span>
			</h2>
			<Proteins order={ order } setOrder={ setOrder } />
			<h2>Sauces</h2>
			<Sauces order={ order } setOrder={ setOrder } />
			<h2>Sides</h2>
			<Sides order={ order } setOrder={ setOrder } />
			<h2>Toppings</h2>
			<Toppings order={ order } setOrder={ setOrder } />
        </div>
    )
};

export default Menu;