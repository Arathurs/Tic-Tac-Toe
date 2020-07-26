import React from 'react';
import { styles } from '../assets/styles';
import { constants } from '../assets/constants';
import { TitleText } from './TitleText';




export const GameHeading = props => {
	
	let obj, message, titleText;
	
	message = props.turn && !props.gameResults ? constants.messages.turn :
	          props.gameResults && props.gameResults !== constants.symbols.xo ? constants.messages.newGameAfterWin :
			  props.gameResults === constants.symbols.xo ? constants.messages.drawHeadLine :
			  constants.messages.startGame;
	obj = {
			color : (props.gameResults === constants.symbols.x || props.player === constants.symbols.x) ? styles.colors.black : 
			        (props.gameResults === constants.symbols.o || props.player === constants.symbols.o) ? styles.colors.eggShell : styles.colors.black,
			fontWeight: styles.font.fontWeight
	};
	
	if(!props.turn && !props.gameResults) {
		console.log('start game: ',JSON.stringify(props));
		titleText = <TitleText message={constants.messages.startGame} />;
		
	} else if(props.gameResults) {
		console.log('game results: ',JSON.stringify(props));
		titleText = <TitleText render={player => player !== constants.symbols.xo ? <span style={obj} >{player}</span> : ''} player={props.gameResults} message={message}></TitleText>;
		
		/*let obj = {
			color : (props.gameResults === constants.symbols.x) ? styles.colors.black : (props.gameResults === constants.symbols.o) ? styles.colors.eggshell : styles.colors.black,
			fontWeight: styles.font.fontWeight
		};
		let message = props.gameResults !== constants.symbols.xo ? constants.messages.newGameAfterWin : constants.messages.drawHeadLine;
		titleText = <TitleText render={winner => props.gameResults !== constants.symbols.xo ? <span style={obj} >{winner}</span> : ''} message={message}></TitleText>;*/
		/*if(props.gameResults === constants.symbols.x) {
		
			titleText = <TitleText message={constants.messages.newGameAfterWin}><span style={{color: styles.colors.black, fontWeight: styles.font.fontWeight }}>{props.winner}</span></TitleText>;
			
		} else {
			
			titleText = <TitleText message={constants.messages.newGameAfterWin}><span style={{color: styles.colors.eggShell, fontWeight: styles.font.fontWeight }}>{props.winner}</span></TitleText>;
				
		}*/
			
	}/* else if(props.draw) {
			
		titleText = <TitleText message={constants.messages.drawHeadLine} style={{textAlign: 'center'}}/>;
			
	} */else if (props.turn && !props.gameResults) {
			//console.log('game is ongoing',obj);
			titleText = <TitleText render={player => <span style={obj}>{player}</span>} player={props.player} message={message}></TitleText>;
	
	
		//if(props.player === constants.symbols.x ) {
		//	titleText = <TitleText render={winner => props.gameResults !== constants.symbols.xo ? <span style={obj} >{winner}</span> : ''} message={message}></TitleText>;
		//	titleText = <TitleText message={constants.messages.turn}><span style={{color: styles.colors.black, fontWeight: 'bold' }}>{props.player}</span></TitleText>;
		//		
		//} else {
				
		//	titleText = <TitleText message={constants.messages.turn}><span style={{color: styles.colors.eggShell, fontWeight: 'bold'}}>{props.player}</span></TitleText>;
				
		//}
			
	}
	
	return titleText;
	
}