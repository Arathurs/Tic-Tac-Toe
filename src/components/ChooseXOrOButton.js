import React from 'react';
import { constants } from '../assets/constants';

export const ChooseXOButton = props => {
	
	return (
		<div>
			<button onClick={()=> props.restart(props.player, props.firstPlayer)}>{props.player}</button>
		</div>
	);
}