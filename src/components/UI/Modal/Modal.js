import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const Modal = ({children, show, onClick}) => {
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
};

export default Modal;