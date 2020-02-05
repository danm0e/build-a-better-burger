import React from 'react';

import classes from './BuildControl.module.css'

const BuildControl = ({label, addHandler, removeHandler, disabled}) => {
	return (
		<div className={classes.BuildControl}>
			<div className={classes.Label}>{label}</div>
			<button 
				className={classes.Less} 
				onClick={removeHandler} 
				disabled={disabled} >
				Less
			</button>
			<button 
				className={classes.More} 
				onClick={addHandler} >
				More
			</button>
		</div>
	);
};



export default BuildControl;