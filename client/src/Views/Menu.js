import React from 'react';
import { Link } from '@reach/router';
import Bases from '../Components/Bases';
import Category from '../Components/Category';

// images
import whiteRice from '../Images/bases/white-rice.png';
import brownRice from '../Images/bases/brown-rice.png';
import salad from '../Images/bases/salad.png';
import tuna from '../Images/proteins/tuna.png';
import salmon from '../Images/proteins/salmon.png';
import shrimp from '../Images/proteins/shrimp.png';
import albacore from '../Images/proteins/albacore.png';
import tako from '../Images/proteins/tako.png';
import spicyTuna from '../Images/proteins/spicy-tuna.png';
import scallops from '../Images/proteins/scallop.png';
import tofu from '../Images/proteins/tofu.png';
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
import corn from '../Images/toppings/corn.png';
import drySeaweed from '../Images/toppings/dry-seaweed.png';
import friedGarlic from '../Images/toppings/fried-garlic.png';
import crispyOnion from '../Images/toppings/crispy-onion.png';
import masago from '../Images/toppings/masago.png';
import greenOnion from '../Images/toppings/green-onion.png';
import furikake from '../Images/toppings/furikake.png';
import edamame from '../Images/toppings/edamame.png';
import sesameSeeds from '../Images/toppings/sesame-seeds.png';
import logo from '../Images/logo.png';

const Menu = props => {
    const { order, setOrder } = props;

	const baseHandler = e => {
		setOrder({
			...order,
			base: e.target.name
		})
	}

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
			<h1 className="create-bowl">
				Create Your Bowl<br />
				<span className="block subheader1">Every Bowl Is Made To Order</span>
			</h1>
            <h2>Base Refactored</h2>
			<Bases
				options={[
					{
						name: "White Rice",
						id: "white-rice",
						checked: order.base === "White Rice",
						src: whiteRice
					},
					{
						name: "Brown Rice",
						id: "brown-rice",
						checked: order.base === "Brown Rice",
						src: brownRice
					},
					{
						name: "Spring Mix Salad",
						id: "salad",
						checked: order.base === "Spring Mix Salad",
						src: salad
					},
				]}
				checkHandler={ baseHandler }
			/>
			<h2>
				Proteins Refactored
				<span className="block subheader2">Choose 2 &#40;regular&#41; or 3 &#40;large&#41; proteins</span>
			</h2>
			<Category
				options={[
					{
						name: "Tuna",
						id: "tuna",
						checked: order.proteins.includes("Tuna"),
						src: tuna
					},
					{
						name: "Salmon",
						id: "salmon",
						checked: order.proteins.includes("Salmon"),
						src: salmon
					},
					{
						name: "Shrimp",
						id: "shrimp",
						checked: order.proteins.includes("Shrimp"),
						src: shrimp
					},
					{
						name: "Albacore",
						id: "albacore",
						checked: order.proteins.includes("Albacore"),
						src: albacore
					},
					{
						name: "Tako",
						id: "tako",
						checked: order.proteins.includes("Tako"),
						src: tako
					},
					{
						name: "Spicy Tuna",
						id: "spicy-tuna",
						checked: order.proteins.includes("Spicy Tuna"),
						src: spicyTuna
					},
					{
						name: "Scallops",
						id: "scallops",
						checked: order.proteins.includes("Scallops"),
						src: scallops
					},
					{
						name: "Tofu",
						id: "tofu",
						checked: order.proteins.includes("Tofu"),
						src: tofu
					}
				]}
				checkHandler={ e => checkHandler(e, "proteins")}
			/>
			<h2>Sauces Refactored</h2>
			<Category
				options={[
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
				options={[
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
			<h2>Toppings Refactored</h2>
			<Category
				options={[
					{
						name: "Corn",
						id: "corn",
						checked: order.toppings.includes("Corn"),
						src: corn
					},
					{
						name: "Dry Seaweed",
						id: "dry-seaweed",
						checked: order.toppings.includes("Dry Seaweed"),
						src: drySeaweed
					},
					{
						name: "Fried Garlic",
						id: "fried-garlic",
						checked: order.toppings.includes("Fried Garlic"),
						src: friedGarlic
					},
					{
						name: "Crispy Onion",
						id: "crispy-onion",
						checked: order.toppings.includes("Crispy Onion"),
						src: crispyOnion
					},
					{
						name: "Masago",
						id: "masago",
						checked: order.toppings.includes("Masago"),
						src: masago
					},
					{
						name: "Green Onion",
						id: "green-onion",
						checked: order.toppings.includes("Green Onion"),
						src: greenOnion
					},
					{
						name: "Furikake",
						id: "furikake",
						checked: order.toppings.includes("Furikake"),
						src: furikake
					},
					{
						name: "Edamame",
						id: "edamame",
						checked: order.toppings.includes("Edamame"),
						src: edamame
					},
					{
						name: "Sesame Seeds",
						id: "sesame-seeds",
						checked: order.toppings.includes("Sesame Seeds"),
						src: sesameSeeds
					}
				]}
				checkHandler={ e => checkHandler(e, "toppings") }
			/>
			<Link to="/order/confirm"><button className="checkout">Proceed To Checkout</button></Link>
			<img src={ logo } alt="Poke Square logo" className="block logo" />
        </div>
    )
};

export default Menu;