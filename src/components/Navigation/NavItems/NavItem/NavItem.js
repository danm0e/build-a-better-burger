import React from 'react';

import classes from './NavItem.module.css'

const NavItem = ({children, link, active}) => (
	<li className={classes.NavItem}>
		<a 
			href={link}
			className={active ? classes.active : null}>
			{children}
		</a>
	</li>
)

export default NavItem;