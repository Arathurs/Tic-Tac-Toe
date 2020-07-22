import React from 'react';
//import { styles } from '../assets/styles';
//import { constants } from '../assets/constants';

export const TitleText = props => {
	
	return <h1 style={{textAlign: 'center'}}>{props.children}{props.message}</h1>;
			
};