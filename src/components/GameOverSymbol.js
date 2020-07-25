import React from 'react';
import { constants } from '../assets/constants';

export const GameOverSymbol  = props => {
	
	let children = (
		
			<span style={{color: styles.colors.black}}>X</span>
										
			<span style={{color: styles.colors.eggShell}}>O</span>
			
	);
	
		
	render() {
		
		<>
		
			<div style={styleObject} >{props.winner !== constants.symbols.xo ? props.winner : children}</div>
						
			<div style={{color: '#000', opacity: 1}}>{message}</div>
		
		</>
		
		
	}
			<>
		
				<div style={styleObject} >{props.winner}</div>
								
				<div style={{color: '#000', opacity: 1}}>{message}</div>
		
			</>
		);
	
	}

	<div style={styleObject} >{props.chi}</div>
								
			<div style={{color: '#000', opacity: 1}}>{{props.message}}</div>


}