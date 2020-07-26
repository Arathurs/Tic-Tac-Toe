import React from 'react';
import { styles } from '../assets/styles';
import { constants } from '../assets/constants';
import { TitleText } from './TitleText';




export const GameHeading = props => {
	
	let message = props.turn && !props.gameResults ? constants.messages.turn :
	          props.gameResults && props.gameResults !== constants.symbols.xo ? constants.messages.newGameAfterWin :
			  props.gameResults === constants.symbols.xo ? constants.messages.drawHeadLine :
			  constants.messages.startGame,
	    obj = {
			color : (props.gameResults === constants.symbols.x || props.player === constants.symbols.x) ? styles.colors.black : 
			        (props.gameResults === constants.symbols.o || props.player === constants.symbols.o) ? styles.colors.eggShell : styles.colors.black,
			fontWeight: styles.font.fontWeight
	    },
		titleText = props.turn && !props.gameResults ? <TitleText render={player => <span style={obj}>{player}</span>} player={props.player} message={message}/> :
		           !props.turn && !props.gameResults ? <TitleText message={constants.messages.startGame} /> : <TitleText render={player => player !== constants.symbols.xo ? <span style={obj} >{player}</span> : ''} player={props.gameResults} message={message} />;
	
	return titleText;
	
}