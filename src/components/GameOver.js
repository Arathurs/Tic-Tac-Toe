import React from 'react';
import { constants } from '../assets/constants';

export const GameOver = props => {
	
	return (
		
		<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: 1, Index: '4', lineHeight: '236px', visibility: 'inherit', height: 216}} >
						
				<div className="display-notification" style={{ opacity: 1}} >
							
					<div className="notification-container">
				
						<div style={props.styleObject} >{props.gameResults !== constants.symbols.xo ? props.gameResults : props.children}</div>
						
						<div style={{color: '#000', opacity: 1}}>{props.message}</div>
								
					</div>
						
				</div>
		
			</div>
		
		);

	
}