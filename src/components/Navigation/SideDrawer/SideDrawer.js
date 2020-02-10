import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.module.css'

const SideDrawer = ({open, closed}) => {
	let attachedClasses = [classes.SideDrawer, classes.Closed];

	if(open) {
		attachedClasses = [classes.SideDrawer, classes.Open]
	}

	return (
		<>
			<Backdrop show={open} onClick={closed} />
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavItems />
				</nav>
			</div>
		</>
	);
};

export default SideDrawer;