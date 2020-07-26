import React from 'react';

export const constants = {
	symbols : {
		x: 'X',
		o: 'O',
		xo: 'XO'
	},
	players: {
		human: 'Human',
		computer: 'Computer'
	},
	messages: {
		newGameAfterWin: ' won. Start a new game!',
		startGame: 'Start a new game!',
		drawHeadLine: 'It\'s a Draw',
		turn: ' Turn',
		won: 'WON',
		draw: 'DRAW'
	},
	statePropertyNames : {
		draw: 'draw',
		turn: 'turn',
		gameResults: 'gameResults',
		firstPlayer: 'firstPlayer',
		player: 'player'
	}
};

export const SymbolsContext = React.createContext(constants.symbols.x);

export const PlayersContext = React.createContext(constants.players.human);

export const MessagesContext = React.createContext(constants.messages);

export const StatePropertyContext = React.createContext(constants.statePropertyNames);
			  