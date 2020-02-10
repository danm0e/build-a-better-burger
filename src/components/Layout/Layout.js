import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css'

class Layout extends Component {
	state = {
		sideDrawerVisible: false
	}

	sideDrawerHandler = () => {
		this.setState(prevState => ({sideDrawerVisible: !prevState.sideDrawerVisible}))
	}

	render() {
		return (
			<>
				<Toolbar onToggle={this.sideDrawerHandler} />
				<SideDrawer 
					open={this.state.sideDrawerVisible} 
					closed={this.sideDrawerHandler} 
				/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</>
		)
	}
}

export default Layout;