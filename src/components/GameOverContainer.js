import React from 'react';
import { constants } from '../assets/constants';
import { styles } from '../assets/styles';
import { GameOver } from './GameOver';

export const GameOverContainer = props => {
	
	const color = props.winner === constants.symbols.x ? styles.colors.black : styles.colors.eggshell,
	      styleObject = {
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
		console.log((props.gameResults === constants.symbols.x || props.gameResults === constants.symbols.o),message,JSON.stringify(props));
	
	return <GameOver gameResults={props.gameResults} color={color} styleObj={styleObject} message={message} children={children} />;
	
	
	
}