import React from 'react';
import { GameTable } from './GameTable';

const style = {
	color: {
		white: '#FFFFFF';
		black: '#000000';
	}
};
export class GameContainer extends React.Component {	
	constructor(props) {		
		super(props);				
		
		this.state = {			
			playerTurn: 'Player 1',
			playerSymbol: 'X', 
			rowOne: ["","",""],
			rowTwo: ["","",""],
			rowThree: ["","",""],			
			game: false	
		};				
		
		this.startGame = this.startGame.bind(this);		
		this.placeSymbol = this.placeSymbol.bind(this);	
		this.findEmptyPlaces = this.findEmptyPlaces.bind(this);
	}
	
	arrayHasRoom(arrIndex, arr, empty) {
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] === "") {
				empty.push(arrIndex+i);
			}
		}
		
		/*if(!arr.length) {
			emptyPlaces = null;
		}*/
		
		//return emptyPlaces;
	}
	
	findEmptyPlaces(arr, arr2, arr3) {
		let emptyPlaces = []
		
		this.arrayHasRoom('0', arr, emptyPlaces);
		this.arrayHasRoom('1', arr2, emptyPlaces);
		this.arrayHasRoom('2', arr3, emptyPlaces);
		console.log(emptyPlaces);
		return emptyPlaces;
	}
	
	findRow(str) {
		return str[0] === '0' ? 'rowOne'
			 : str[0] === '1' ? 'rowTwo'
			 : 'rowThree';
	}
	
	componentDidUpdate(prevState) {
		
		if(this.state.playerTurn === 'Computer') {
			
			const places = this.findEmptyPlaces(this.state.rowOne, this.state.rowTwo, this.state.rowThree);
			console.log('component update', places);
			const index = Math.floor(Math.random() * places.length);
			const selection = places[index];
			const row = this.findRow(selection),
				arrIndex = parseInt(selection[1]);
			let obj = {
				playerTurn: this.state.playerTurn === 'Computer' ? 'Player 1' : 'Computer',
				playerSymbol: this.state.playerSymbol === 'O' ? 'X' : 'O'
			};
			const temp = this.state[row].slice();
			temp[arrIndex] = this.state.playerSymbol;
			console.log('temp', arrIndex, this.state.playerSymbol, temp);
			obj[row] = temp;
			this.setState(obj);
			console.log('component update 2',selection,row, obj);
			
		}
	}
	/*placeRandomSymbol() {
		const arr1 = this.arrayHasRoom(this.state.rowOne),
		      arr2 = this.arrayHasRoom(this.state.rowTwo),
		      arr3 = this.arrayHasRoom(this.state.rowTwo);
		let rowsWithBlanks = [];  
		if (arr1) {
		
			rowsWithBlanks.push('rowOne');
		
		} else if(arr2) {
			
			rowsWithBlanks.push('rowTwo');
		
		} else if(arr3) {
			
			rowsWithBlanks.push('rowTwo');
			
		}
		const availableRows = rowsWithBlanks.length;
		const index = Math.floor(Math.random()* availableRows);
		const row = rowsWithBlanks
		
	}*/
	
	startGame() {		
		this.setState({	
			game: true	
		});	
	}		
	
	placeSymbol(stateObject) {		
		//const obj = {};		
		//obj[position] = arr;		
		console.log('inside symbol',stateObject);		
		this.setState(stateObject);	
	}			
	
	render () {		
		
		let stringify = JSON.stringify(this.state);		
		console.log(stringify,'rendering');		
		
		return <GameTable player={this.state.playerTurn} symbol={this.state.playerSymbol} one={this.state.rowOne} two={this.state.rowTwo} three={this.state.rowThree} game={this.state.game} start={this.startGame} place={this.placeSymbol}/>;
		
	}	
}