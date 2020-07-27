import React from 'react';
import { OpacityContext } from '../assets/styles';
import { constants } from '../assets/constants';
import { ChooseXOButton } from './ChooseXOButton';
import { GameHeading } from './GameHeading';
import { TableRow } from './TableRow';


export const GameTable = props => {	

	return (
		<OpacityContext.Consumer>
		{ opacity => (
			<div className="container">
		
				<div className="button-container">
				
					<ChooseXOButton playerChoice={constants.symbols.x} restart={props.restart} />
						
					<ChooseXOButton playerChoice={constants.symbols.o} restart={props.restart} />
			
				</div>
					
				<div className="heading-container" >
			
					<GameHeading turn={props.turn} player={props.player} gameResults={props.gameResults}/>
					
				</div>				
					
				<div className="game-container">
			
					<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216, opacity: opacity}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
					
					<table className="tic-tac-toe-table" style={{opacity: opacity}}>
						
						<tbody>
								
							<TableRow data={props.one} arrName="rowOne" firstPlayer={props.firstPlayer} player={props.player} turn={props.turn} arrayEquals={props.arrayEquals} didIWin={props.didIWin} place={props.place} emptyBlocks={props.emptyBlocks} />
							
							<TableRow data={props.two} arrName="rowTwo" firstPlayer={props.firstPlayer} player={props.player} turn={props.turn} arrayEquals={props.arrayEquals} didIWin={props.didIWin} place={props.place} emptyBlocks={props.emptyBlocks} />
							
							<TableRow data={props.three} arrName="rowThree" firstPlayer={props.firstPlayer} player={props.player} turn={props.turn} arrayEquals={props.arrayEquals} didIWin={props.didIWin} place={props.place} emptyBlocks={props.emptyBlocks} />
							
						</tbody>					
						
					</table>				
					{!props.render ? '' : props.render(props.gameResults)}
				</div>				
					
				<div className="restart">
						
					<button onClick={props.clear} style={{padding: 'auto'}} >Restart Game</button>				
					
				</div>			
				
			</div>	
		
		)}
		</OpacityContext.Consumer>
	
	);		

}