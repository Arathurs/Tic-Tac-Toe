import React from 'react';
import { TableRow } from './TableRow';
import { styles } from '../assets/styles';
import { constants } from '../assets/constants';
import { GameHeading } from './GameHeading';


export class GameTable extends React.Component {	
	
	render () {				
		
		//console.log('if there is neither a draw or winner', this.props.draw, this.props.winner, this.props.winnerSymbol, (!this.props.draw || !this.props.winner));
		if(!this.props.draw && !this.props.winnerSymbol){
			console.log('if there is neither a draw or winner', !this.props.draw, !this.props.winner, (!this.props.draw || !this.props.winner));
			return (			
				<div className="container">
					<div className="heading-container" >
						<GameHeading game={this.props.game} draw={this.props.draw} symbol={this.props.symbol} winnerSymbol={this.props.winnerSymbol} />
					</div>				
					<div className="game-container">
						<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
						<table className="tic-tac-toe-table" >
							<tbody>
								<TableRow data={this.props.one} game={this.props.game} arrName="rowOne" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.two} game={this.props.game} arrName="rowTwo" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.three} game={this.props.game} arrName="rowThree" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
							</tbody>					
						</table>				
					</div>				
					<div className="restart">
						<button onClick={this.props.restart} style={{padding: 'auto'}} >Restart Game</button>				
					</div>			
				</div>		
			);
			
		} else if(this.props.winnerSymbol === 'X') {
			console.log('if X is the winner', this.props.winnerSymbol, this.props.winner, (this.props.winner && this.props.winnerSymbol === 'X'));
			return (
				<div className="container">
					<div className="heading-container" >
						<GameHeading game={this.props.game} draw={this.props.draw} symbol={this.props.symbol} winnerSymbol={this.props.winnerSymbol} />
					</div>
					<div className="game-container" >
					<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216, opacity: 0}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
						<table className="tic-tac-toe-table " style={{opacity: 0}} >
							<tbody>
								<TableRow data={this.props.one} game={this.props.game} arrName="rowOne" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.two} game={this.props.game} arrName="rowTwo" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.three} game={this.props.game} arrName="rowThree" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
							</tbody>					
						</table>
						<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: '1', zIndex: '4', lineHeight: '236px', visibility: 'inherit', height: 216}} >
							<div className="display-notification" style={{ opacity: 1}} >
								<div className="notification-container">
									<h2 style={{color: styles.black, fontSize: 40}} >{this.props.winnerSymbol}</h2>
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
		
		} else if(this.props.winnerSymbol === 'O') {
			console.log('if O is the winner', this.props.winnerSymbol, this.props.winner, (this.props.winner && this.props.winnerSymbol === 'O'));
			return (
				<div className="container">
					<div className="heading-container" >
						<GameHeading game={this.props.game} draw={this.props.draw} symbol={this.props.symbol} winnerSymbol={this.props.winnerSymbol} />
					</div>
					<div className="game-container" >
						<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216, opacity: 0}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
						<table className="tic-tac-toe-table " style={{opacity: 0}} >
							<tbody>
								<TableRow data={this.props.one} game={this.props.game} arrName="rowOne" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.two} game={this.props.game} arrName="rowTwo" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.three} game={this.props.game} arrName="rowThree" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
							</tbody>					
						</table>
						<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: '1', zIndex: '4', lineHeight: '236px', visibility: 'inherit'}} >
							<div className="display-notification" style={{ opacity: 1}} >
								<div className="notification-container">
									<div style={{color: styles.eggShell, fontSize: 40}} >{this.props.winnerSymbol}</div>
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
			console.log('if there is a draw', this.props.winnerSymbol, this.props.winner, (this.props.winner && this.props.winnerSymbol === 'X'));
			return (
				<div className="container">
					<div className="heading-container" >
						<GameHeading game={this.props.game} draw={this.props.draw} symbol={this.props.symbol} winnerSymbol={this.props.winnerSymbol} />
					</div>
					<div className="game-container" >
						<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216, opacity: 0}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
						<table className="tic-tac-toe-table " style={{opacity: 0}} >
							<tbody>
								<TableRow data={this.props.one} game={this.props.game} arrName="rowOne" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.two} game={this.props.game} arrName="rowTwo" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.three} game={this.props.game} arrName="rowThree" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} />
							</tbody>					
						</table>
						<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: '1', zIndex: '4', lineHeight: '236px', visibility: 'inherit'}} >
							<div className="display-notification" style={{ opacity: 1}} >
								<div className="notification-container">
									<div>
										<span className={{color: styles.black}}>X</span>
										<span className={{color: styles.eggShell}}>O</span>
									</div>
									<div className={{color: styles.black, display: 'block'}}>DRAW!</div>>
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