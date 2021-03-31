import React from 'react';
import { Link } from '@reach/router';
import Bases from '../Components/Bases';
import Proteins from '../Components/Proteins';
import Sauces from '../Components/Sauces';
import Sides from '../Components/Sides';
import Category from '../Components/Category';
import Toppings from '../Components/Toppings';
import crabSalad from '../Images/sides/crab-salad.png';
import seaweedSalad from '../Images/sides/seaweed-salad.png';
import avocado from '../Images/sides/avocado.png';
import cucumber from '../Images/sides/cucumber.png';
import onions from '../Images/sides/onions.png';
import pickledGinger from '../Images/sides/pickled-ginger.png';
import wasabi from '../Images/sides/wasabi.png';
import logo from '../Images/logo.png';

const Menu = props => {
    const { order, setOrder } = props;

    return (
        <div>
			<h1>
				Create Your Bowl<br />
				<span className="block subheader1">Every Bowl Is Made To Order</span>
			</h1>
            <h2>Base</h2>
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
			<h2>Sides Refactored</h2>
			<Category
				order={ order }
				setOrder={ setOrder }
				sides={[
					{
						name: "Crab Salad",
						id: "crab-salad",
						src: crabSalad
					},
					{
						name: "Seaweed Salad",
						id: "seaweed-salad",
						src: seaweedSalad
					}
				]}
			/>
			<h2>Toppings</h2>
			<Toppings order={ order } setOrder={ setOrder } />
			<Link to="/order/confirm"><button className="checkout">Proceed To Checkout</button></Link>
			<img src={ logo } alt="Poke Square logo" className="block logo" />
        </div>
    )
};

export default Menu;