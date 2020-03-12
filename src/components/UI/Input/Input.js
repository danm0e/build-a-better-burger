import React from 'react';

import classes from './Input.module.css';

const getElement = props => {
	const {
		elementType, 
		elementConfig, 
		value, 
		onChange,
		inValid,
		shouldValidate,
		touched
	} = props;

	let inputElement = null;
	const inputClasses = [classes.InputElement];

	if(inValid && shouldValidate && touched) {
		inputClasses.push(classes.Invalid)
	}

	switch( elementType ) {
		case( 'textarea' ):
			inputElement = (
				<textarea 
					className={inputClasses.join(' ')} 
					{...elementConfig} 
					value={value}
					onChange={onChange}
				/>
			)
			break;
		case( 'select' ):
			inputElement = (
				<select 
					className={inputClasses.join(' ')} 
					{...elementConfig} 
					value={value}
					onChange={onChange}
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
					className={inputClasses.join(' ')} 
					{...elementConfig} 
					value={value}
					onChange={onChange}
				/>
			)
				
	}

	return inputElement

}

const Input = ( props ) => {
	const { label } = props;

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{label}</label>
			{getElement(props)}
		</div>
	);
};

export default Input;