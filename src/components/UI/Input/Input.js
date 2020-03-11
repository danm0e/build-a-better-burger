import React from 'react';

import classes from './Input.module.css';

const Input = ( props ) => {
	let inputElement = null;
	const {elementType, elementConfig, label, value} = props;

	switch( elementType ) {
		case( 'textarea' ):
			inputElement = (
				<textarea 
					className={classes.InputElement} 
					{...elementConfig} 
					value={value}
				/>
			)
			break;
		case( 'select' ):
			inputElement = (
				<select 
					className={classes.InputElement} 
					{...elementConfig} 
					value={value}
				>
				{elementConfig.options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
				</select>
			)
			break;
		default:
			inputElement = (
				<input 
					className={classes.InputElement} 
					{...elementConfig} 
					value={value}
				/>
			)
				
	}

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{label}</label>
			{inputElement}
		</div>
	);
};

export default Input;