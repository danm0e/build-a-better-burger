import React from 'react';

import classes from './SideDrawerToggle.module.css';

const SideDrawerToggle = ({onClick}) => (
	<div 
		className={classes.SideDrawerToggle} 
		onClick={onClick}>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default SideDrawerToggle;