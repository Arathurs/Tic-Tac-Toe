import React from 'react';
import { TableRow } from './TableRow';

const styles = {
	white: '#fff',
	black: '#000'
};

export class GameTable extends React.Component {	
	
	render () {				
	
		let titleText;				
		if(!this.props.game) {
			
			titleText = 'Start a new game';
		
		} else if(this.props.winner) {
			
			titleText = `${this.props.winnerSymbol} won. Start a new game.`;
			
		} else if(this.props.draw) {
			
			titleText = 'Unfortunately it was a draw. Start a new game.';
			
		} else {
			
			titleText = `Its your turn ${this.props.player}. Place an ${this.props.symbol} in a open box!`;					
		
		}
		
		//console.log('if there is neither a draw or winner', this.props.draw, this.props.winner, this.props.winnerSymbol, (!this.props.draw || !this.props.winner));
		if(!this.props.draw && !this.props.winner){
			console.log('if there is neither a draw or winner', !this.props.draw, !this.props.winner, (!this.props.draw || !this.props.winner));
			return (			
				<div className="container">			
					<div className="heading-container" >
						<h1 style={{textAlign: 'center'}}>{ titleText }</h1>
					</div>				
					<div className="game-container">
						<svg xmlns="http://www.w3.org/2000/svg" className="scv-position scv-background" style={{ width: 216}} jsname="hSNbuf"><path className="background-path" d="M 108 83 L 6 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 6 153" jsname="V3UtZb" /><path className="background-path" d="M 108 83 L 210 83" jsname="V3UtZb" /><path className="background-path" d="M 108 153 L 210 153" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 16" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 16" jsname="V3UtZb" /><path className="background-path" d="M 73 118 L 73 220" jsname="V3UtZb" /><path className="background-path" d="M 143 118 L 143 220" jsname="V3UtZb" /></svg>
						<table className="tic-tac-toe-table" >
							<tbody>
								<TableRow data={this.props.one} restOfData={[this.props.two, this.props.three]} arrName="rowOne" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} collectMissingRows={this.props.getMissingRows} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.two} restOfData={[this.props.one, this.props.three]} arrName="rowTwo" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} collectMissingRows={this.props.getMissingRows} didIWin={this.props.didIWin} place={this.props.place} />
								<TableRow data={this.props.three} restOfData={[this.props.one, this.props.two]} arrName="rowThree" player={this.props.player} symbol={this.props.symbol} arrayEquals={this.props.arrayEquals} collectMissingRows={this.props.getMissingRows} didIWin={this.props.didIWin} place={this.props.place} />
							</tbody>					
						</table>				
					</div>				
					<div className="restart">
						<button onClick={this.props.start} style={{padding: 'auto'}} >Restart Game</button>				
					</div>			
				</div>		
			);
			
		} else if(this.props.winner && this.props.winnerSymbol === 'X') {
			console.log('if X is the winner', this.props.winnerSymbol, this.props.winner, (this.props.winner && this.props.winnerSymbol === 'X'));
			return (
				<div className="container">
					<div className="heading-container" >
						<h1 style={{textAlign: 'center'}} >{ titleText }</h1>
					</div>
					<div className="game-container" >
						<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: '1', zIndex: '4', lineHeight: '236px', visibility: 'inherit'}} >
							<div className="display-notification" style={{ opacity: 1}} >
								<div className="notification-container">
									<h2 style={{color: styles.black, fontSize: 40}} >{this.props.winnerSymbol}</h2>
									<div style={{color: styles.black, opacity: 1}}>WON!</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		
		} else if(this.props.winner && this.props.winnerSymbol === 'O') {
			console.log('if O is the winner', this.props.winnerSymbol, this.props.winner, (this.props.winner && this.props.winnerSymbol === 'O'));
			return (
				<div className="container">
					<div className="heading-container" >
						<h1 style={{textAlign: 'center'}}>{ titleText }</h1>
					</div>
					<div className="game-container">
						<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: 1, zIndex: 4, lineHeight: 236, visibility: 'inherit', width: 216}}> 
							<div className="background-position"> 
								<h2 style={{color: 'black'}} ><span style={{color: 'white'}}>{this.props.winnerSymbol}</span> WON!</h2>
							</div>
						</div>
					</div>
				</div>
			);
		
		} else if(this.props.draw) {
				console.log('if there is a draw', this.props.winnerSymbol, this.props.winner, (this.props.winner && this.props.winnerSymbol === 'X'));
				return (
					<>
						<div className="heading-container" >
							<h1 style={{textAlign: 'center'}}>{ titleText }</h1>
						</div>
						<div className="game-container">
							<h2><span className={{color: 'black'}}>X</span><span className={{color: 'black'}}>X</span></h2>
							<span className={{color: 'black', display: 'block'}}>DRAW!</span>
						</div>
					</>
			);
		}
			
	}	
}