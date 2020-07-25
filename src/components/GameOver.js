import React from 'react';
import { constants } from '../assets/constants';
import { styles } from '../assets/styles';

export const WinMessage = props => {
	
	const color = props.winner === constants.symbols.x ? styles.colors.black : styles.colors.eggshell,
	      styleObject = {
		    color: color,
		    fontSize: 40
	}, 
		message = props.winner === constants.symbols.x || props. winner === constants.symbols.o ? constants.messages.won : constants.messages.draw;
	
	
	return (
		<>
			<div style={styleObject} >{props.chi}</div>
								
			<div style={{color: '#000', opacity: 1}}>{{props.}</div>
		</>
	);

	return (
		<>
			<div style={styleObject} >{props.chi}</div>
								
			<div style={{color: '#000', opacity: 1}}>{{props.message}}</div>
		</>
	);
	
	return (
	
		<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: 1, Index: '4', lineHeight: '236px', visibility: 'inherit', height: 216}} >
						
			<div className="display-notification" style={{ opacity: 1}} >
							
				<div className="notification-container">
				
					<div style={styleObject} >{props.children}</div>
								
					<div style={{color: '#000', opacity: 1}}>{message}</div>
								
				</div>
						
			</div>
		
		</div>
	
	)
}