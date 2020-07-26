import React from 'react';

export const ChooseXOButton = props => {
	
	return (
		<div>
			<button onClick={()=> props.restart(props.player, props.firstPlayer)}>{props.player}</button>
		</div>
	);
}