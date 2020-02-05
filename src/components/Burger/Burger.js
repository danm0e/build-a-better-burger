import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const Burger = ({ ingredients }) => {
	let allIngredients = Object.keys(ingredients)
		.map( key => {
			return [...Array(ingredients[key])].map((_, idx) => {
				return <BurgerIngredient key={key + idx} type={key} />
			})
		})
		.reduce((prevVal, curVal) => {
			return prevVal.concat(curVal)
		}, [])

	if(allIngredients.length === 0) {
		allIngredients = <p>Please add some ingredients!</p>
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
				{allIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;