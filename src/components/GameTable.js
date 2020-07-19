import React from 'react';
import { TableRow } from './TableRow';

export class GameTable extends React.Component {	
	
	render () {				
	
		let titleText;				
		if (!this.props.game) {
			
			titleText = 'Start a new game';
		
		} else {
			
			titleText = `Its your turn ${this.props.player}. Place an ${this.props.symbol} in a open box!`;					
		
		}				
		return (			
			<>				
				<div className="heading-container" >
					<h1 style={{textAlign: 'center'}}>{ titleText }</h1>
				</div>				
				<div className="game-container">
					<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
					<table className="tic-tac-toe-table" >
						<tbody>
							<TableRow data={this.props.one} arrName="rowOne" player={this.props.player} symbol={this.props.symbol} game={this.props.game} place={this.props.place} />
							<TableRow data={this.props.two} arrName="rowTwo" player={this.props.player} symbol={this.props.symbol} game={this.props.game} place={this.props.place} />
							<TableRow data={this.props.three} arrName="rowThree" player={this.props.player} symbol={this.props.symbol} game={this.props.game} place={this.props.place} />
						</tbody>					
					</table>				
				</div>				
				<div className="restart">
					<button onClick={this.props.start} style={{padding: 'auto'}} >Restart Game</button>				
				</div>			
			</>		
		);	
	}	
}