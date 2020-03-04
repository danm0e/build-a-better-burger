import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
		loading: false,
		error: false
	}

	componentDidMount() {
		axios.get('https://reactbuildabetterburger.firebaseio.com/ingredients.json')
			.then(res => {
				this.setState({ingredients: res.data})
			})
			.catch(() => {
				this.setState({error: true})
			})
	}

	addHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = PRICES[type]
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({ 
			totalPrice: newPrice, 
			ingredients: updatedIngredients 
		})
		this.isPurchasable(updatedIngredients)
	}

	removeHandler = type => {
		const oldCount = this.state.ingredients[type];
		if(oldCount <= 0 ){
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = PRICES[type]
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({ 
			totalPrice: newPrice, 
			ingredients: updatedIngredients 
		})
		this.isPurchasable(updatedIngredients)
	}

	isPurchasable(ingredients) {
		const sum = Object.keys(ingredients)
			.map(key => {
				return ingredients[key];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

			
		this.setState({purchasable: sum > 0})
	}

	purchasingHandler = () => {
		this.setState({purchasing: true})
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false})
	}

	purchaseContinueHandler = () => {
		this.setState({loading: true});

		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	price: this.state.totalPrice,
		// 	customer: {
		// 		name: 'Dan Moe',
		// 		address: {
		// 			street: 'My Street',
		// 			postcode: 'W1',
		// 			country: 'England'
		// 		},
		// 		email: 'test@test.com'
		// 	},
		// 	deliveryMethod: 'fastest'
		// }

		// axios.post('/orders.json', order)
		// 	.then(res => {
		// 		this.setState({loading: true, purchasing: false});
		// 	})
		// 	.catch(err => {
		// 		this.setState({loading: true, purchasing: false});
		// 	});

		const queryParams = [];
		for ( let i in this.state.ingredients ) {
			queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`)
		}

		const queryString = queryParams.join('&');
		this.props.history.push({
			pathname: '/checkout',
			search: `?${queryString}`
		});
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		}

		for( let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}

		let orderSummary = null;
		let burger = this.state.error ? <p>Can get ingredients</p> : <Spinner />

		if(this.state.ingredients) {
			burger = (
				<>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls 
						addHandler={this.addHandler}
						removeHandler={this.removeHandler}
						disabled={disabledInfo}
						currentPrice={this.state.totalPrice}
						purchasable={this.state.purchasable}
						ordered={this.purchasingHandler}
					/>
				</>
			);

			orderSummary = (
				<OrderSummary 
					ingredients={this.state.ingredients}
					price={this.state.totalPrice}
					purchaseContinue={this.purchaseContinueHandler}
					purchaseCancel={this.purchaseCancelHandler}
				/>
			);
		}

		if(this.state.loading) orderSummary = <Spinner />

		return (
			<>
				<Modal show={this.state.purchasing} onClick={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);