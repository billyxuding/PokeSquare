import React from 'react';
import { Link } from '@reach/router';
import Category from '../Components/Category';
import { Button, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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

	const checkHandler = (e, category) => {
		let newArray;
        if (e.target.checked) {
            newArray = [...order[category], e.target.name];
        } else {
            newArray = order[category].filter((item) => item !== e.target.name);
        }
        setOrder({
            ...order,
            [category]: newArray
        });
	}

    return (
        <>
			<h1 className="create-bowl">
				Create Your Bowl<br />
				<span className="block subheader1">Every Bowl Is Made To Order</span>
			</h1>
            <h2>Base</h2>
			<Category
				order={ order }
				type={ "radio" }
				category={ "base" }
				options={ [
					{
						name: "White Rice",
						src: whiteRice
					},
					{
						name: "Brown Rice",
						src: brownRice
					},
					{
						name: "Spring Mix Salad",
						src: salad
					},
				] }
				checkHandler={ baseHandler }
			/>
			<h2>
				Proteins
				<span className="block subheader2">Choose up to 3 proteins</span>
			</h2>
			<Category
				order={ order }
				type={ "checkbox" }
				category={ "proteins" }
				options={ [
					{
						name: "Tuna",
						src: tuna
					},
					{
						name: "Salmon",
						src: salmon
					},
					{
						name: "Shrimp",
						src: shrimp
					},
					{
						name: "Albacore",
						src: albacore
					},
					{
						name: "Tako",
						src: tako
					},
					{
						name: "Spicy Tuna",
						src: spicyTuna
					},
					{
						name: "Scallops",
						src: scallops
					},
					{
						name: "Tofu",
						src: tofu
					}
				] }
				checkHandler={ e => checkHandler(e, "proteins")}
			/>
			<h2>Sauces</h2>
			<Category
				order={ order }
				type={ "checkbox" }
				category={ "sauces" }
				options={ [
					{
						name: "House Poke",
						src: housePoke
					},
					{
						name: "Sriracha Aioli",
						src: srirachaAioli
					},
					{
						name: "Wasabi Aioli",
						src: wasabiAioli
					},
					{
						name: "Zesty Ponzu",
						src: zestyPonzu
					}
				] }
				checkHandler={ e => checkHandler(e, "sauces") }
			/>
			<h2>Sides</h2>
			<Category
				order={ order }
				type={ "checkbox" }
				category={ "sides" }
				options={ [
					{
						name: "Crab Salad",
						src: crabSalad
					},
					{
						name: "Seaweed Salad",
						src: seaweedSalad
					},
					{
						name: "Avocado",
						src: avocado
					},
					{
						name: "Cucumber",
						src: cucumber
					},
					{
						name: "Onions",
						src: onions
					},
					{
						name: "Pickled Ginger",
						src: pickledGinger
					},
					{
						name: "Wasabi",
						src: wasabi
					}
				] }
				checkHandler={ e => checkHandler(e, "sides") }
			/>
			<h2>Toppings</h2>
			<Category
				order={ order }
				type={ "checkbox" }
				category={ "toppings" }
				options={ [
					{
						name: "Corn",
						src: corn
					},
					{
						name: "Dry Seaweed",
						src: drySeaweed
					},
					{
						name: "Fried Garlic",
						src: friedGarlic
					},
					{
						name: "Crispy Onion",
						src: crispyOnion
					},
					{
						name: "Masago",
						src: masago
					},
					{
						name: "Green Onion",
						src: greenOnion
					},
					{
						name: "Furikake",
						src: furikake
					},
					{
						name: "Edamame",
						src: edamame
					},
					{
						name: "Sesame Seeds",
						src: sesameSeeds
					}
				] }
				checkHandler={ e => checkHandler(e, "toppings") }
			/>
			<Link to="/order/confirm" className="remove-underline">
				<Button variant="contained" color="primary" size="large">
					Add To Cart
				</Button>
				<IconButton color="primary" aria-label="add to shopping cart">
					<AddShoppingCartIcon />
				</IconButton>
			</Link>
			<img src={ logo } alt="Poke Square logo" className="block logo" />
        </>
    )
};

export default Menu;