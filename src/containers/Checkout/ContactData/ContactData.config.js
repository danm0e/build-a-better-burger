const ContactDataConfig = {
	name: {
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Your Name'
		},
		value: ''
	},
	street: {
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Street'
		},
		value: ''
	},
	postcode: {
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Postcode'
		},
		value: ''
	},
	country: {
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Country'
		},
		value: ''
	},
	email: {
		elementType: 'input',
		elementConfig: {
			type: 'email',
			placeholder: 'Your Email'
		},
		value: ''
	},
	deliveryMethod: {
		elementType: 'select',
		elementConfig: {
			options: [
				{ value: 'fastest', label: 'Fastest' },
				{ value: 'cheapest', label: 'Cheapest' }
			]
		},
		value: ''
	}
}

export default ContactDataConfig;