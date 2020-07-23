import React from 'react';

import { styles, OpacityContext } from '../assets/styles';
import { constants } from '../assets/constants';
import { ChooseXOButton } from './ChooseXOButton';
import { GameHeading } from './GameHeading';
import { TableRow } from './TableRow';


export class GameTable extends React.Component {	
	constructor(props) {
		
		super(props);
		
	}
	
	render () {				
		console.log('context',this.props.value,this.context);
		const propString = JSON.stringify(this.props.value),
		  contextString = JSON.stringify(this.context);
		 console.log(propString, contextString);
		return (
			
			<div className="container">
		
				<div className="button-container">
				
					<ChooseXOButton player={constants.symbols.x} firstPlayer={constants.players.humans} restart={this.props.restart} />
						
					<ChooseXOButton player={constants.symbols.o} firstPlayer={constants.players.computers} restart={this.props.restart} />
			
				</div>
					
				<div className="heading-container" >
			
					<GameHeading turn={this.props.turn} draw={this.props.draw} player={this.props.player} />
					
				</div>				
					
				<div className="game-container">
			
					<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216, opacity: this.context}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
					
					<table className="tic-tac-toe-table" style={{opacity: this.context}}>
						
						<tbody>
								
							<TableRow data={this.props.one} arrName="rowOne" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks} />
							
							<TableRow data={this.props.two} arrName="rowTwo" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks} />
							
							<TableRow data={this.props.three} arrName="rowThree" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks} />
							
						</tbody>					
						
					</table>				
					{this.props.children}
				</div>				
					
				<div className="restart">
						
					<button onClick={this.props.restart} style={{padding: 'auto'}} >Restart Game</button>				
					
				</div>			
				
			</div>	
		
		);
			
	}	
}

GameTable.contextType = OpacityContext;