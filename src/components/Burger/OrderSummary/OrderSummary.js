import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ingredients, price, purchaseContinue, purchaseCancel}) => {
	const summary = Object.keys(ingredients)
		.map((key, idx) => <li key={key}><span style={{textTransform: "capitalize"}}>{key}:</span> {ingredients[key]}</li>)

	return (
		<>
			<h3>Your order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{summary}
			</ul>
			<p><strong>Total price: &pound;{price.toFixed(2)}</strong></p>
			<p>Continue to checkout?</p>
			<Button type='Danger' onClick={purchaseCancel}>CANCEL</Button>
			<Button type='Success' onClick={purchaseContinue}>CONTINUE</Button>
		</>
	);
};

export default OrderSummary;