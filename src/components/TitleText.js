import React from 'react';
//import { styles } from '../assets/styles';
//import { constants } from '../assets/constants';

export const TitleText = props => {
	//console.log(props.player,JSON.stringify(props));
	return <h1 style={{textAlign: 'center'}}>{!props.render ? '' : props.render(props.player)}{props.message}</h1>;
			
};