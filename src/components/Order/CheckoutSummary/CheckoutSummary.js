import React, { Component } from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.module.css';

class CheckoutSummary extends Component {
	render() {
		const { ingredients, checkoutCancelled, checkoutContinued } = this.props;

		return (
			<div className={classes.CheckoutSummary}>
				<h1>We hope it tastes good!</h1>
				<div style={{width: '100%', margin: 'auto'}}>
					<Burger ingredients={ingredients}/>
				</div>
				<Button type="Danger" onClick={checkoutCancelled}>CANCEL</Button>
				<Button type="Success" onClick={checkoutContinued}>CONTINUE</Button>
			</div>
		);
	}
}

export default CheckoutSummary;