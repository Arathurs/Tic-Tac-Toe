import React from 'react';
import { constants } from '../assets/constants';
import { styles } from '../assets/styles';

export const WinMessage = props => {
	
	const color = props.winner === constants.symbols.x ? styles.colors.black : styles.colors.eggshell,
	      styleObject = {
		    color: color,
		    fontSize: 40
	};
	
	return (
		<>
			<div style={styleObject} >{props.render}</div>
								
			<div style={{color: '#000', opacity: 1}}>{props.message}</div>
		</>
	);

}