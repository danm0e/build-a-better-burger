import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css'

const NavItem = ({children, link, active}) => (
	<li className={classes.NavItem}>
		<NavLink 
			to={link}
			exact
			activeClassName={classes.active}>
			{children}
		</NavLink>
	</li>
)

export default NavItem;