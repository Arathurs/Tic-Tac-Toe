import React from 'react';
import { styles } from '../assets/styles';

export const GameHeading = props => {
	
	let titleText;				
	
	if(!props.game && !props.winnerSymbol && !props.draw) {
			
		titleText = <h1 style={{textAlign: 'center'}}>Start a new game!</h1>;
		
	} else if(props.winnerSymbol) {
			
		if(props.winnerSymbol === 'X') {
		
			titleText = <h1 style={{textAlign: 'center'}}><span style={{color: styles.black, fontWeight: styles.fontWeight }} >{props.winnerSymbol}</span> won. Start a new game!</h1>;
			
		} else {
				
			titleText = <h1 style={{textAlign: 'center'}}><span style={{color: styles.eggShell, fontWeight: styles.fontWeight }} >{props.winnerSymbol}</span> won. Start a new game!</h1>;
				
		}
			
	} else if(props.draw) {
			
		titleText = <h1 style={{textAlign: 'center'}}>l}It's a Draw</h1>;
			
	} else if (props.game && !props.winnerSymbol && !props.draw) {
			
		if(props.symbol === 'X') {
				
			titleText = <h1 style={{textAlign: 'center'}}><span style={{color: styles.black, fontWeight: styles.fontWeight }} >{props.symbol}</span> Turn</h1>;
				
		} else {
				
			titleText = <h1 style={{textAlign: 'center'}}><span style={{color: styles.eggShell, fontWeight: styles.fontWeight }} >{props.symbol}</span> Turn</h1>;
				
		}
			
	}
	
	return titleText;
	
}