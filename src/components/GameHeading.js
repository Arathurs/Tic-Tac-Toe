import React from 'react';
import { styles } from '../assets/styles';
import { constants } from '../assets/constants';
import { TitleText } from './TitleText';

export const GameHeading = props => {
	
	let titleText;				
	if(!props.turn && !props.draw && !props.draw) {
			
		titleText = <TitleText message={constants.messages.startGame} style={{textAlign: 'center'}}/>;
		
	} else if(props.winner) {
			
		if(props.winner === constants.symbols.x) {
		
			titleText = <TitleText message={constants.messages.newGameAfterWin}><span style={{color: styles.colors.black, fontWeight: styles.font.fontWeight }}>{props.winner}</span></TitleText>;
			
		} else {
			
			titleText = <TitleText message={constants.messages.newGameAfterWin}><span style={{color: styles.colors.eggShell, fontWeight: styles.font.fontWeight }}>{props.winner}</span></TitleText>;
				
		}
			
	} else if(props.draw) {
			
		titleText = <TitleText message={constants.messages.drawHeadLine} style={{textAlign: 'center'}}/>;
			
	} else if (props.turn && !props.winner) {
			
		if(props.symbol === constants.symbols.x ) {
		
			titleText = <TitleText message={constants.messages.turn}><span style={{color: styles.colors.black, fontWeight: styles.font.fontWeight }}>{props.player}</span></TitleText>;
				
		} else {
				
			titleText = <TitleText message={constants.messages.turn}><span style={{color: styles.colors.eggShell, fontWeight: styles.font.fontWeight }}>{props.player}</span></TitleText>;
				
		}
			
	}
	
	return titleText;
	
}