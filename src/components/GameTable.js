import React from 'react';

import { styles } from '../assets/styles';
import { constants } from '../assets/constants';
import { ChooseXOButton } from './ChooseXOButton';
import { GameHeading } from './GameHeading';
import { TableRow } from './TableRow';


export class GameTable extends React.Component {	
	
	render () {				
		
		//console.log('if there is neither a draw or winner', this.props.draw, this.props.winner, this.props.winnerSymbol, (!this.props.draw || !this.props.winner));
		if(this.props.turn || (!this.props.turn && !this.props.draw && !this.props.winner)){
			console.log('if there is neither a draw or winner', this.props.turn, !this.props.draw, !this.props.winner, (!this.props.draw || !this.props.winner));
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
						<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
						<table className="tic-tac-toe-table" >
							<tbody>
								<TableRow data={this.props.one} arrName="rowOne" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks} />
								<TableRow data={this.props.two} arrName="rowTwo" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks} />
								<TableRow data={this.props.three} arrName="rowThree" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks} />
							</tbody>					
						</table>				
					</div>				
					<div className="restart">
						<button onClick={this.props.restart} style={{padding: 'auto'}} >Restart Game</button>				
					</div>			
				</div>		
			);
			
		} else if(this.props.winner === constants.symbols.x) {
			console.log('if X is the winner', this.props.winner);
			return (
				<div className="container">
					<div className="heading-container" >
						<GameHeading turn={this.props.turn} draw={this.props.draw} player={this.props.player} />
					</div>
					<div className="game-container" >
					<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216, opacity: 0}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
						<table className="tic-tac-toe-table " style={{opacity: 0}} >
							<tbody>
								<TableRow data={this.props.one} arrName="rowOne" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.two} arrName="rowTwo" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.three} arrName="rowThree" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
							</tbody>					
						</table>	
						<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: '1', zIndex: '4', lineHeight: '236px', visibility: 'inherit', height: 216}} >
							<div className="display-notification" style={{ opacity: 1}} >
								<div className="notification-container">
									<div style={{color: styles.black, fontSize: 40}} >{this.props.winner}</div>
									<div style={{color: styles.black, opacity: 1}}>WON!</div>
								</div>
							</div>
						</div>
					</div>
					<div className="restart">
						<button onClick={this.props.restart} style={{padding: 'auto'}} >Restart Game</button>				
					</div>
				</div>
			);
		
		} else if(this.props.winner === constants.symbols.o) {
			console.log('if O is the winner', this.props.winner);
			return (
				<div className="container">
					<div className="heading-container" >
						<GameHeading turn={this.props.turn} draw={this.props.draw} player={this.props.player} />
					</div>
					<div className="game-container" >
						<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216, opacity: 0}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
						<table className="tic-tac-toe-table " style={{opacity: 0}} >
							<tbody>
								<TableRow data={this.props.one} arrName="rowOne" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.two} arrName="rowTwo" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.three} arrName="rowThree" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
							</tbody>					
						</table>	
						<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: '1', zIndex: '4', lineHeight: '236px', visibility: 'inherit'}} >
							<div className="display-notification" style={{ opacity: 1}} >
								<div className="notification-container">
									<div style={{color: styles.eggShell, fontSize: 40}} >{this.props.winner}</div>
									<div style={{color: styles.black, opacity: 1}}>WON!</div>
								</div>
							</div>
						</div>
					</div>
					<div className="restart">
						<button onClick={this.props.restart} style={{padding: 'auto'}} >Restart Game</button>				
					</div>
				</div>
			);
		
		} else if(this.props.draw) {
			console.log('if there is a draw', this.props.winner);
			return (
				<div className="container">
					<div className="heading-container" >
						<GameHeading turn={this.props.turn} draw={this.props.draw} player={this.props.player} />
					</div>
					<div className="game-container" >
						<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216, opacity: 0}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
						<table className="tic-tac-toe-table " style={{opacity: 0}} >
						<tbody>
								<TableRow data={this.props.one} arrName="rowOne" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.two} arrName="rowTwo" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.three} arrName="rowThree" player={this.props.player} turn={this.props.turn} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
							</tbody>					
						</table>	
						<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: '1', zIndex: '4', lineHeight: '236px', visibility: 'inherit'}} >
							<div className="display-notification" style={{ opacity: 1}} >
								<div className="notification-container">
									<div>
										<span style={{color: styles.black}}>X</span>
										<span style={{color: styles.eggShell}}>O</span>
									</div>
									<div style={{color: styles.black, display: 'block'}}>DRAW!</div>>
								</div>
							</div>
						</div>
					</div>
					<div className="restart">
						<button onClick={this.props.restart} style={{padding: 'auto'}} >Restart Game</button>				
					</div>
				</div>
			);
		}
			
	}	
}