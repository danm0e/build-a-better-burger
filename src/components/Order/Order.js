import React from 'react';

import classes from './Order.module.css';

const Order = ({ ingredients, price }) => {
	const ingredientsArr = [];

	for(let name in ingredients){
		ingredientsArr.push({
			name: name,
			amount: ingredients[name]
		})
	}

	const ingredientsList = ingredientsArr.map(ingredient => {
		return (
			<span 
				style={{
					textTransform: 'capitalize',
					display: 'inline-block',
					margin: '0 8px',
					border: '1px solid #ccc',
					padding: '5px'
				}}
				key={ingredient.name}>
				{ingredient.name} ({ingredient.amount})
			</span>
		)
	});

	return (
		<div className={classes.Order}>
			<p>Ingredients: {ingredientsList}</p>
			<p>Price: <strong>&pound; {price.toFixed(1)}</strong></p>
		</div>
	);
};

export default Order;