import React from 'react';
import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
]

const BuildControls = ({addHandler, removeHandler, disabled, currentPrice}) => {
	return (
		<div className={classes.BuildControls}>
			<p>Current price: <strong>&pound;{currentPrice.toFixed(2)}</strong></p>
			{ controls.map( control => (
				<BuildControl 
					key={control.label} 
					label={control.label}
					addHandler={() => addHandler(control.type)}
					removeHandler={() => removeHandler(control.type)}
					disabled={disabled[control.type]}
				/>
			)
			)}
		</div>
	);
};

export default BuildControls;