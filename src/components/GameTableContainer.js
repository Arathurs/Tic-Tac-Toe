import React from 'react';
import { OpacityContext } from '../assets/styles';
import { GameTable } from './GameTable';
import { GameOverContainer } from './GameOverContainer';

export class GameTableContainer extends React.Component {	
	
	render () {				
		
		const opaqueContainer = (

			<OpacityContext.Provider value={0}>
					
				<GameTable render={winner => <GameOverContainer winner={winner} gameResults={this.props.gameResults} />} firstPlayer={this.props.firstPlayer} gameResults={this.props.gameResults} clear={this.props.clearGame} restart={this.props.restart} turn={this.props.turn}  player={this.props.player} one={this.props.one} two={this.props.two} three={this.props.three} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks} />
			
			</OpacityContext.Provider>
				
		);
		
		return (this.props.turn)|| (!this.props.turn && !this.props.gameResults) ? <GameTable firstPlayer={this.props.firstPlayer} gameResults={this.props.gameResults} clear={this.props.clearGame} restart={this.props.restart} turn={this.props.turn} player={this.props.player} one={this.props.one} two={this.props.two} three={this.props.three} arrayEquals={this.props.arrayEquals} didIWin={this.props.didIWin} place={this.props.place} emptyBlocks={this.props.emptyBlocks}/> : opaqueContainer;
		
	}	
}