import React from 'react';
import { constants } from '../assets/constants';
import { styles } from '../assets/styles';
import { GameOver } from './GameOver';

export function GameOverContainer (props) {
	const color = props.gameResults === constants.symbols.x ? styles.colors.black : styles.colors.eggShell,
	      obj = {
		    color: color,
		    fontSize: 40
	}, 
		  message = (props.gameResults === constants.symbols.x || props.gameResults === constants.symbols.o) ? constants.messages.won : constants.messages.draw,
		  children = (
		    <>
			  <span style={{color: styles.colors.black}}>X</span>					
			  <span style={{color: styles.colors.eggShell}}>O</span>
			</>
	);
	return <GameOver gameResults={props.gameResults} color={color} styleObj={obj} message={message} children={children} />;	
}