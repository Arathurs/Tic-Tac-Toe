import React from 'react';
import { styles } from '../assets/styles';
import { constants } from '../assets/constants';
import { GameHeading } from './GameHeading';
import { TitleText } from './TitleText';




export function GameHeadingContainer (props) {
	const message = props.turn && !props.gameResults ? constants.messages.turn :
	                !props.turn && !props.gameResults ? constants.messages.startGame :
	                props.gameResults !== constants.symbols.xo ? constants.messages.newGameAfterWin :
			        props.gameResults === constants.symbols.xo ? constants.messages.drawHeadLine : constants.messages.startGame;
	let obj = {
			color : props.gameResults === constants.symbols.x || props.player === constants.symbols.x ? styles.colors.black : 
			         styles.colors.eggShell,
			fontWeight: styles.font.fontWeight
	    },
		titleText;
	
	if(props.turn && !props.gameResults) {
		titleText = <TitleText render={player => <span style={obj}>{player}</span>} player={props.player} message={message}/>;
	} else if (!props.turn && !props.gameResults) {
		titleText= <TitleText message={message} /> 
	} else if (props.gameResults) {
		titleText = <TitleText render={player => player !== constants.symbols.xo ? <span style={obj} >{player}</span> : ''} player={props.gameResults} message={message} />;
	}
	
	return (
		<GameHeading render={titleText} />
	)
	
}