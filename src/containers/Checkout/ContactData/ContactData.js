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
		loading: false,
		isPristine: false
	}

	orderHandler = (e) => {
		e.preventDefault();

		const formData = {}
		for(let formElement in this.state.orderForm) {
			formData[formElement] = this.state.orderForm[formElement].value
		}

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			deliveryMethod: 'fastest',
			orderData: formData
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
		const newOrderForm = {...this.state.orderForm};
		const newElement = {...newOrderForm[el]};
		newElement.value = ev.target.value;
		newElement.valid = this.checkFormValidity(newElement.value, newElement.validation);
		newOrderForm[el] = newElement;
		newElement.touched = true;

		let isPristine = true;
		for( let newElement in newOrderForm ) {
			isPristine = newOrderForm[newElement].valid && isPristine
		}

		this.setState({ orderForm: newOrderForm, isPristine: isPristine });
	}

	checkFormValidity = (value, rules) => {
		const { length } = value;
		const { required, minLength, maxLength } = rules;
		let isValid = true;
		
		if(required) {
			isValid = value.trim() !== '' && isValid;
		}

		if(minLength) {
			isValid = length >= minLength && isValid;
		}

		if(maxLength) {
			isValid = length <= maxLength && isValid;
		}

		return isValid;
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
			<form onSubmit={this.orderHandler}>
				{formElements.map(element => (
					<Input 
						key={element.id}
						elementType={element.config.elementType} 
						elementConfig={element.config.elementConfig} 
						value={element.config.value} 
						inValid={!element.config.valid}
						shouldValidate={!element.config.validation}
						touched={element.config.touched}
						onChange={(e) => this.onChangeHandler(e, element.id)}
					/>
				))}
				<Button type='Success' disabled={!this.state.isPristine}>ORDER</Button>
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