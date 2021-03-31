import React from 'react';
import { Link } from '@reach/router';
import Bases from '../Components/Bases';
import Proteins from '../Components/Proteins';
import Sauces from '../Components/Sauces';
import Sides from '../Components/Sides';
import Category from '../Components/Category';
import Toppings from '../Components/Toppings';
import housePoke from '../Images/sauces/house-poke.png';
import srirachaAioli from '../Images/sauces/sriracha-aioli.png';
import wasabiAioli from '../Images/sauces/wasabi-aioli.png';
import zestyPonzu from '../Images/sauces/zesty-ponzu.png';
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

	const checkHandler = (e, type) => {
		let newSauces;
        if (e.target.checked) {
            newSauces = [...order[type], e.target.name];
        } else {
            newSauces = order[type].filter((item) => item !== e.target.name);
        }
        setOrder({
            ...order,
            [type]: newSauces
        });
	}

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
			<h2>Sauces Refactored</h2>
			{/* <Sauces order={ order } setOrder={ setOrder } /> */}
			<Category
				ingredients={[
					{
						name: "House Poke",
						id: "house-poke",
						checked: order.sauces.includes("House Poke"),
						src: housePoke
					},
					{
						name: "Sriracha Aioli",
						id: "sriracha",
						checked: order.sauces.includes("Sriracha Aioli"),
						src: srirachaAioli
					},
					{
						name: "Wasabi Aioli",
						id: "wasabi-aioli",
						checked: order.sauces.includes("Wasabi Aioli"),
						src: wasabiAioli
					},
					{
						name: "Zesty Ponzu",
						id: "zesty-ponzu",
						checked: order.sauces.includes("Zesty Ponzu"),
						src: zestyPonzu
					}
				]}
				checkHandler={ e => checkHandler(e, "sauces") }
			/>
			<h2>Sides Refactored</h2>
			<Category
				ingredients={[
					{
						name: "Crab Salad",
						id: "crab-salad",
						checked: order.sides.includes("Crab Salad"),
						src: crabSalad
					},
					{
						name: "Seaweed Salad",
						id: "seaweed-salad",
						checked: order.sides.includes("Seaweed Salad"),
						src: seaweedSalad
					},
					{
						name: "Avocado",
						id: "avocado",
						checked: order.sides.includes("Avocado"),
						src: avocado
					},
					{
						name: "Cucumber",
						id: "cucumber",
						checked: order.sides.includes("Cucumber"),
						src: cucumber
					},
					{
						name: "Onions",
						id: "onions",
						checked: order.sides.includes("Onions"),
						src: onions
					},
					{
						name: "Pickled Ginger",
						id: "pickled-ginger",
						checked: order.sides.includes("Pickled Ginger"),
						src: pickledGinger
					},
					{
						name: "Wasabi",
						id: "wasabi",
						checked: order.sides.includes("Wasabi"),
						src: wasabi
					}
				]}
				checkHandler={ e => checkHandler(e, "sides") }
			/>
			<h2>Toppings</h2>
			<Toppings order={ order } setOrder={ setOrder } />
			<Link to="/order/confirm"><button className="checkout">Proceed To Checkout</button></Link>
			<img src={ logo } alt="Poke Square logo" className="block logo" />
        </div>
    )
};

export default Menu;