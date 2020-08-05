import React from 'react';
import { constants } from '../assets/constants';
import { GameTableContainer } from './GameTableContainer';

export class GameContainer extends React.Component {	
	constructor(props) {		
		super(props);				
		this.state = {			 
			firstPlayer: '',
			player: '',
			turn: null,
			rowOne: ["","",""],
			rowTwo: ["","",""],
			rowThree: ["","",""],
			emptyPlaces: [],
			gameResults: ''
		};				
		this.clearGame = this.clearGame.bind(this);
		this.restartGame = this.restartGame.bind(this);		
		this.placeSymbol = this.placeSymbol.bind(this);	
		this.findEmptyPositions = this.findEmptyPositions.bind(this);
		this.computerTakesTurn = this.computerTakesTurn.bind(this);
		this.isThereAWinner = this.isThereAWinner.bind(this); 
	}
	
	arrayHasRoom(arrIndex, arr, emptyPlaces) {
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] === '') {
				emptyPlaces.push(arrIndex+i);
			}
		}
	}
	
	findEmptyPositions(arr, arr2, arr3) {
		let emptyPlaces = [];
		this.arrayHasRoom('0', arr, emptyPlaces);
		this.arrayHasRoom('1', arr2, emptyPlaces);
		this.arrayHasRoom('2', arr3, emptyPlaces);
		return emptyPlaces.slice();
	}
	
	findRow(str) {
		return str === '0' ? 'rowOne'
			 : str === '1' ? 'rowTwo'
             : 'rowThree';
	}
	
	arrayEquals(a,b) {
		return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
	}
	
	isThereAWinner(player, row, rowName) {
		let row1, row2, row3;
		row = row.slice();
		if(rowName === 'rowOne') {
			row1 = row;
			row2 = this.state.rowTwo.slice();
			row3 = this.state.rowThree.slice();
		} else if(rowName === 'rowTwo') {
			row1 = this.state.rowOne.slice();
			row2 = row;
			row3 = this.state.rowThree.slice();
		}  else {
			row1 = this.state.rowOne.slice();
			row2 = this.state.rowTwo.slice();
			row3 = row;
		}
		
		const control = [player, player, player],
		      arr4 = [row1[0], row2[0], row3[0]],
		      arr5 = [row1[1], row2[1], row3[1]],
		      arr6 = [row1[2], row2[2], row3[2]],
		      arr7 = [row1[0], row2[1], row3[2]],
		      arr8 = [row3[0], row2[1], row1[2]],
		      isArr1Equal = this.arrayEquals(control, row1.slice()),
	          isArr2Equal = this.arrayEquals(control, row2.slice()),
		      isArr3Equal = this.arrayEquals(control, row3.slice()),
		      isArr4Equal = this.arrayEquals(control, arr4.slice()),
              isArr5Equal = this.arrayEquals(control, arr5.slice()),
		      isArr6Equal = this.arrayEquals(control, arr6.slice()),
		      isArr7Equal = this.arrayEquals(control, arr7.slice()),
		      isArr8Equal = this.arrayEquals(control, arr8.slice());
		if(isArr1Equal ||
		   isArr2Equal ||
		   isArr3Equal ||
		   isArr4Equal ||
		   isArr5Equal ||
		   isArr6Equal ||
		   isArr7Equal ||
		   isArr8Equal ) {
			const obj = {
				gameResults: player
			};
			return obj;
		} else {
			return false;
		}
	}
	
	computerTakesTurn() {
		const places = this.findEmptyPositions(this.state.rowOne, this.state.rowTwo, this.state.rowThree),
		      index = Math.floor(Math.random() * places.length),
		      item = places[index],
			  row = this.findRow(item[0]),
			  arrIndex = parseInt(item[1]),
		      temp = this.state[row].slice();
		let obj = {
			  player: this.state.player === constants.symbols.o ? constants.symbols.x : constants.symbols.o,
			  turn: this.state.turn === constants.players.computer ? constants.players.human : constants.players.computer		
		};
		places.splice(index, 1);
		obj.emptyPlaces = places;
		temp[arrIndex] = this.state.player;
		obj[row] = temp;
		
		const win = this.isThereAWinner(this.state.player, obj[row], row);
		if(win) {
			let stateObject = Object.assign({}, obj, win);
			obj = stateObject;
		} else if (!places.length && constants.players.computer === this.state.firstPlayer) {
			obj.gameResults = constants.symbols.xo;
		}
		
		setTimeout(() => {
			this.setState(obj);
		}, 1500);
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (!this.state.gameResults && this.state.turn === constants.players.computer) {
			this.computerTakesTurn();
		} else if (this.state.gameResults) {
			setTimeout(() => {
				this.setState({
					turn: null
				});
			}, 1500);
		}
	}
	
	componentWillUnmount() {
		this.setState = {			
			firstPlayer: '',
			player: '',
			turn: null,
			rowOne: ["","",""],
			rowTwo: ["","",""],
			rowThree: ["","",""],
			emptyPlaces: [],
			gameResults: ''
		};	
	}
	
	clearGame() {
		this.setState({	
			firstPlayer: '',
			player: '',
			turn: null, 
			rowOne: ["","",""],
			rowTwo: ["","",""],
			rowThree: ["","",""],
			emptyPlaces: [],
		    gameResults: ''
		});
	}
	
	restartGame(playerChoice) {
		const player = playerChoice || constants.symbols.x,
		      firstPlayer = player === constants.symbols.x ? constants.players.human : constants.players.computer;
		this.clearGame();
		this.setState({	
			firstPlayer: firstPlayer,
			player: player,
			turn: firstPlayer
		});
	}
	
	placeSymbol(stateObject) {		
		this.setState(stateObject);	
	}			
	
	render () {		
		return <GameTableContainer firstPlayer={this.state.firstPlayer} player={this.state.player} one={this.state.rowOne} two={this.state.rowTwo} three={this.state.rowThree} gameResults={this.state.gameResults} turn={this.state.turn} arrayEquals={this.arrayEquals} didIWin={this.isThereAWinner} restart={this.restartGame} clearGame={this.clearGame} place={this.placeSymbol} emptyBlocks={this.state.emptyPlaces}/>;
	}	
}