import React from 'react';
import { ChoosePlayerButtons } from './ChoosePlayerButtons';
import { GameHeadingContainer } from './GameHeadingContainer';
import { Grid } from './Grid';
import { RestartButton } from './RestartButton';

export const GameTable = props => (
	<div className="container">
		<ChoosePlayerButtons restart={props.restart} />
		<GameHeadingContainer turn={props.turn} player={props.player} gameResults={props.gameResults}/>			
		<Grid {...props} />
		<RestartButton onClick={props.clearGame} />			
	</div>	
);
	