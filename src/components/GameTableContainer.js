import React from 'react';
import { OpacityContext } from '../assets/styles';
import { GameTable } from './GameTable';
import { GameOverContainer } from './GameOverContainer';
import { TableContainerErrorBoundary } from './errors/TableContainerErrorBoundary';

export class GameTableContainer extends React.Component {	
	
	render () {				
		let tableContainer;
						
		if (this.props.turn || (!this.props.turn && !this.props.gameResults)) {
			tableContainer = <GameTable {...this.props} />;
		} else if (this.props.gameResults) {
			tableContainer = (
				<OpacityContext.Provider value={0}>
					<GameTable render={() => <GameOverContainer gameResults={this.props.gameResults} />} {...this.props} />
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