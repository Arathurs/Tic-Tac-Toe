import React from 'react';
import { OpacityContext } from '../assets/styles';
import { GameTable } from './GameTable';
import { GameOverContainer } from './GameOverContainer';
import { TableContainerErrorBoundary } from './errors/TableContainerErrorBoundary';

export class GameTableContainer extends React.Component {	
	
	render () {				
		//const propString = JSON.parse(JSON.stringify(this.props));
		//console.log('game table container',propString,'player is:',this.props.rowOne);
		let tableContainer;
						
		if (this.props.turn || (!this.props.turn && !this.props.gameResults)) {
			tableContainer = <GameTable {...this.props} />;
		} else if (this.props.gameResults) {
			tableContainer = (
				<OpacityContext.Provider value={0}>
					<GameTable render={winner => <GameOverContainer winner={winner} gameResults={this.props.gameResults} />} {...this.props} />
				</ OpacityContext.Provider>
			);
		}
		return (
			<TableContainerErrorBoundary>
				{tableContainer}
			</ TableContainerErrorBoundary>
		);
	}	
}