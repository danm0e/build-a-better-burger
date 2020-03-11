import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.module.css';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postcode: ''
		}
	}

	orderHandler = (e) => {
		e.preventDefault();

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Dan Moe',
				address: {
					street: 'My Street',
					postcode: 'W1',
					country: 'England'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		}

		axios.post('/orders.json', order)
			.then(res => {
				this.setState({loading: false});
				this.props.history.push('/');
			})
			.catch(err => {
				this.setState({loading: false});
			});

	}

	render() {
		let form = (
			<form>
				<Input inputtype='input' type='text' name='name' placeholder='Your name'/>
				<Input inputtype='input' type='email' name='email' placeholder='Your email'/>
				<Input inputtype='input' type='text' name='street' placeholder='Street'/>
				<Input inputtype='input' type='text' name='postcode' placeholder='Postcode'/>
				<Button type='Success' onClick={this.orderHandler}>ORDER</Button>
			</form>
		);

		if(this.state.loading) {
			form = <Spinner />
		}

		return (
			<div className={classes.ContactData}>
				<h4>Enter your contact details</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;