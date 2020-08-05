import React from 'react';
import { OpacityContext } from '../assets/styles';
import { GridSVG } from './GridSVG';
import { TableRow } from './TableRow';

export const Grid = props => (
	<OpacityContext.Consumer>
		{ opacity => (
		<div className="game-container">
			<GridSVG opacity={opacity} />
			<table className="tic-tac-toe-table" style={{opacity: opacity}}>
				<tbody>
					<TableRow data={props.rowOne} arrName="rowOne" firstPlayer={props.firstPlayer} player={props.player} turn={props.turn} arrayEquals={props.arrayEquals} didIWin={props.didIWin} place={props.place} emptyPlaces={props.emptyPlaces} />
					<TableRow data={props.rowTwo} arrName="rowTwo" firstPlayer={props.firstPlayer} player={props.player} turn={props.turn} arrayEquals={props.arrayEquals} didIWin={props.didIWin} place={props.place} emptyPlaces={props.emptyPlaces} />
					<TableRow data={props.rowThree} arrName="rowThree" firstPlayer={props.firstPlayer} player={props.player} turn={props.turn} arrayEquals={props.arrayEquals} didIWin={props.didIWin} place={props.place} emptyPlaces={props.emptyPlaces} />
				</tbody>					
			</table>				
			{!props.render ? '' : props.render(props.gameResults)}
		</div>
		)}
	</OpacityContext.Consumer>
);