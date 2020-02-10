import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'

import classes from './Toolbar.module.css';

const Toolbar = ({onToggle}) => (
	<header className={classes.Toolbar}>
		<SideDrawerToggle onClick={onToggle}/>
		<div className={classes.Logo}>
			<Logo />
		</div>
        <nav className={classes.DeskTopOnly}>
			<NavItems />
		</nav>
	</header>
);

export default Toolbar;