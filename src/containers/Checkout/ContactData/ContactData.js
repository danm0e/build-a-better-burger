import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input';
import ContactDataConfig from './ContactData.config';

import classes from './ContactData.module.css';

class ContactData extends Component {
	state = {
		orderForm: ContactDataConfig,
		loading: false
	}

	orderHandler = (e) => {
		e.preventDefault();

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
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

	onChangeHandler = (ev, el) => {
		const newOrderForm = {...this.state.orderForm}
		const newElement = {...newOrderForm[el]}
		newElement.value = ev.target.value
		newOrderForm[el] = newElement
		this.setState({ orderForm: newOrderForm })
	}

	render() {
		const formElements = [];
		for( let key in this.state.orderForm ) {
			formElements.push({
				id: key,
				config: this.state.orderForm[key]
			})
		}

		let form = (
			<form>
				{formElements.map(element => (
					<Input 
						key={element.id}
						elementType={element.config.elementType} 
						elementConfig={element.config.elementConfig} 
						value={element.config.value} 
						onChange={(e) => this.onChangeHandler(e, element.id)}
					/>
				))}
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