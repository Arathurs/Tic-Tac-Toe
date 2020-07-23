import React from 'react';
import { styles, OpacityContext } from '../assets/styles';
import { constants } from '../assets/constants';
import { GameTable } from './GameTable';
import { DisplayNotificationContainer } from './DisplayNotificationContainer';


export class GameTableContainer extends React.Component {	
		constructor(props) {
		
		super(props);
		
	}
	
	render () {				
		
		//console.log('if there is neither a draw or winner', this.props.draw, this.props.winner, this.props.winnerSymbol, (!this.props.draw || !this.props.winner));
		if(this.props.turn || (!this.props.turn && !this.props.draw && !this.props.winner)){
			console.log('if there is neither a draw or winner', this.props.turn, !this.props.draw, !this.props.winner, (!this.props.draw || !this.props.winner));
			return  (
				
				<GameTable winner={this.props.winner} restart={this.props.restart} turn={this.props.turn}  draw={this.props.draw} player={this.props.player} one={this.props.one} two={this.props.two} three={this.props.three} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks}/>
				
			);
			
		} else if(this.props.winner === constants.symbols.x) {
			console.log('if X is the winner', this.props.winner);
			return (

				<OpacityContext.Provider value={0}>
					
					<GameTable winner={this.props.winner} restart={this.props.restart} turn={this.props.turn}  draw={this.props.draw} player={this.props.player} one={this.props.one} two={this.props.two} three={this.props.three} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks}>
							
						<DisplayNotificationContainer winner={this.props.winner}>
						
							<div style={{color: styles.black, fontSize: 40}} >{this.props.winner}</div>
								
							<div style={{color: styles.black, opacity: this.context}}>WON!</div>
					
						</DisplayNotificationContainer>			
							
					</GameTable>
				
				</OpacityContext.Provider>
				
			);
		
		} else if(this.props.winner === constants.symbols.o) {
			console.log('if O is the winner', this.props.winner);
			return (
				
				<OpacityContext.Provider value={0}>
					
					<GameTable winner={this.props.winner} restart={this.props.restart} turn={this.props.turn}  draw={this.props.draw} player={this.props.player} one={this.props.one} two={this.props.two} three={this.props.three} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks}>
							
						<DisplayNotificationContainer winner={this.props.winner}>
						
								<div style={{color: styles.eggShell, fontSize: 40}} >{this.props.winner}</div>
								
								<div style={{color: styles.black, opacity: 1}}>WON!</div>
					
							</DisplayNotificationContainer>			
							
					</GameTable>
				
				</OpacityContext.Provider>
				
			);
		
		} else if(this.props.draw) {
			
			return (
				
				<OpacityContext.Provider value={0}>
					
					<GameTable winner={this.props.winner} restart={this.props.restart} turn={this.props.turn}  draw={this.props.draw} player={this.props.player} one={this.props.one} two={this.props.two} three={this.props.three} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks}>
							
						<DisplayNotificationContainer winner={this.props.winner}>
						
								<div>
										
									<span style={{color: styles.black}}>X</span>
										
									<span style={{color: styles.eggShell}}>O</span>
									
								</div>
									
								<div style={{color: styles.black, display: 'block'}}>DRAW!</div>
					
							</DisplayNotificationContainer>			
							
					</GameTable>
				
				</OpacityContext.Provider>
				
			);
			
		}
	}	
}