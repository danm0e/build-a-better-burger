import React from 'react';

import classes from './Button.module.css';

const Button = ({onClick, children, type}) => (
	<button
		className={[classes.Button, classes[type]].join(' ')}
		onClick={onClick}>
		{children}
	</button>
);

export default Button;