import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

class Modal extends Component {

	shouldComponentUpdate( nextProps, nextState ) {
		return nextProps.show !== this.props.show;
	}

	render() {
		const {children, show, onClick} = this.props;

		return (
			<>
				<div 
					className={classes.Modal}
					style={{
						transform: show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: show ? '1' : '0'
					}}>
					{children}
				</div>
				<Backdrop show={show} onClick={onClick}/>
			</>
		);
	}
};

export default Modal;