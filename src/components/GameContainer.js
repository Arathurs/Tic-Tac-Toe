import React from 'react';
import { constants } from '../assets/constants';
import { GameTableContainer } from './GameTableContainer';

//simplify state and other variables
//replace playerSymbol with player
//replace game and victory with winner
///replace winnerName and winnerSymbol with winner
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
			draw: false,
			winner: ''
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
			if(arr[i] === "") {
				//console.log('found empty splot');
				emptyPlaces.push(arrIndex+i);
			}
		}
		//result = temp.concat(0);
		//console.log(emptyPlaces);
		/*if(!arr.length) {
			emptyPlaces = null;
		}*/
		//return emptyPlaces;
	}
	
	findEmptyPositions(arr, arr2, arr3) {
		let emptyPlaces = [];
		
		this.arrayHasRoom('0', arr, emptyPlaces);
		this.arrayHasRoom('1', arr2, emptyPlaces);
		this.arrayHasRoom('2', arr3, emptyPlaces);
		//consol.log(emptyPlaces);
		
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
	
	/*findAndSortMissingRows(row) {
		let control = ['rowOne', 'rowTwo', 'rowThree'],
			results = [];
		
		for(let i = 0; i < control.length; i++) {
			
			const item = control[i]; 

			if(item !== row) {
				results.push(item);
			}
		}
		results.sort();
		return results.slice();
	}*/
	
	isThereAWinner(player, row, rowName) {
		//console.log('isthereawinner',player,row,rowName);
		//let missingRows = this.findAndSortMissingRows(rowName);
		//console.log(player, row, rowName, missingRows);
		
		let row1, row2, row3;
		row = row.slice();
		
		if(rowName === 'rowOne') {
			
			row1 = row;
			row2 = this.state.rowThree.slice();
			row3 = this.state.rowTwo.slice();
			
		} else if(rowName === 'rowTwo') {
			
			row1 = this.state.rowOne.slice();
			row2 = row;
			row3 = this.state.rowThree.slice();
		
		}  else {
			
			row1 = this.state.rowOne.slice();
			row2 = this.state.rowTwo.slice();
			row3 = row;
		
		}
		
		const control = [player, player, player];
		//console.log(comparisonArray,'compare');
		const arr4 = [row1[0], row2[0], row3[0]];
		const arr5 = [row1[1], row2[1], row3[1]];
		const arr6 = [row1[2], row2[2], row3[2]];
		const arr7 = [row1[0], row2[1], row3[2]];
		const arr8 = [row3[0], row2[1], row1[2]];
		const isArr1Equal = this.arrayEquals(control, row1.slice());
		const isArr2Equal = this.arrayEquals(control, row2.slice());
		const isArr3Equal = this.arrayEquals(control, row3.slice());
		const isArr4Equal = this.arrayEquals(control, arr4.slice());
		const isArr5Equal = this.arrayEquals(control, arr5.slice());
		const isArr6Equal = this.arrayEquals(control, arr6.slice());
		const isArr7Equal = this.arrayEquals(control, arr7.slice());
		const isArr8Equal = this.arrayEquals(control, arr8.slice());
		//console.log(control, row1, row2, row3, arr4, arr5, arr6, arr7, arr8, isArr1Equal, isArr2Equal, isArr3Equal,	isArr4Equal, isArr5Equal, isArr6Equal, isArr7Equal, isArr8Equal);
			
		if( isArr1Equal ||
		    isArr2Equal ||
		    isArr3Equal ||
			isArr4Equal ||
			isArr5Equal ||
			isArr6Equal ||
			isArr7Equal ||
			isArr8Equal ) {
			
			//console.log('isThereAWinner someone satisfied the if conditions');
			const obj = {
					
					winner: player
					
			};
			
			return obj;
		
		} else {
			
			//console.log('isThereAWinner someone did not satisfy the if conditions')
			return false;
				
		}
					
	}
	
	computerTakesTurn() {
		
		let places = this.findEmptyPositions(this.state.rowOne, this.state.rowTwo, this.state.rowThree),
		    obj = {
				
				player: this.state.player === constants.symbols.o ? constants.symbols.x : constants.symbols.o,
				turn: this.state.turn === constants.players.computer ? constants.players.human : constants.players.computer
			};
		/*if(!places.length) {
			
			this.setState({
				draw: true,
				turn : null
			});
		
		
			return;
		}*/
		
		//console.log('component update find places', places);
		const index = Math.floor(Math.random() * places.length),
		      item = places[index],
			  row = this.findRow(item[0]),
			  /*missingRows = this.findMissingRows(row),
			  row2 = missingRows[0],
			  row3 = missingRows[1],*/
			  arrIndex = parseInt(item[1]),
		      temp = this.state[row].slice(),
			  placesPropName = 'emptyPlaces';
		
		places.splice(index, 1);
		obj[placesPropName] = places;
		//console.log('component update fixing', places);
		temp[arrIndex] = this.state.player;
		//console.log('temp', arrIndex, this.state.playerSymbol, temp);
		//console.log('missing rows :',row, row2, row3);
		obj[row] = temp;
		const win = this.isThereAWinner(this.state.player, obj[row], row);
		
		if(win) {
			//console.log('before change: ',obj);
			const stateObject = Object.assign({}, obj, win);
			obj = stateObject;
			//console.log('after change: ',obj);
		} else if (!win && !places) {
			//console.log('this computer made the last move resulting in a draw')	;
			obj[constants.statePropertyNames.draw]= true;
			obj[constants.statePropertyNames.turn]= null;
			
		}
		
		setTimeout(() => {
			
			this.setState(obj);
			
		}, 1500);
		
		//console.log('computertakesturn right before setState',row, missingRows, obj[row], this.state[row2]);
		
	}
	
	componentDidUpdate(prevProps, prevState) {
		
		//console.log('inside component did update',this.state.winner,this.state.draw, this.state.emptyPlaces.length);
		if (!this.state.winner && !this.state.draw && this.state.turn === constants.players.computer) {

			//console.log('inside component did update first if');
			this.computerTakesTurn();
			
		} else if (this.state.winner) {
			
			setTimeout(() => {
			
				this.setState({
				
					turn: null
				
				});
			
			}, 2000);
			
		}
		
		
	}
	
	/*componentWillUnmount() {
		
		this.setState = {			
			firstPlayer: '',
			player: '',
			turn: null,
			rowOne: ["","",""],
			rowTwo: ["","",""],
			rowThree: ["","",""],
			emptyPlaces: [],
			draw: false,
			winner: ''
		};	
	}*/
	
	clearGame() {
		//console.log('clearing game');
		this.setState({	
			firstPlayer: '',
			player: '',
			turn: null, 
			rowOne: ["","",""],
			rowTwo: ["","",""],
			rowThree: ["","",""],
			emptyPlaces: [],
			draw: false,
			winner: ''
		});
		
	}
	
	restartGame(playerChoice) {
		//console.log(playerChoice);
		const player = playerChoice || constants.symbols.x,
		      firstPlayer = player === constants.symbols.x ? constants.players.human : constants.players.computer;
		//console.log(player,firstPlayer);
		this.clearGame();
		
		this.setState({	
			
			firstPlayer: firstPlayer,
			player: player,
			turn: firstPlayer
			
		});
		
	}
	
	placeSymbol(stateObject) {		
		
		//const obj = {};		
		//obj[position] = arr;		
		//console.log('inside symbol',stateObject);
		if(stateObject.winner) {
			
			//console.log('winner is true');
			this.setState(stateObject); 
			
			
		} else {
			//console.log('else this.setState still runs');
			this.setState(stateObject);	
			
		}
		
		
	
	}			
	
	render () {		
		
		//let stringify = JSON.stringify(this.state);		
		//console.log(stringify,'rendering');		
		
		return <GameTableContainer firstPlayer={this.state.firstPlayer} player={this.state.player} one={this.state.rowOne} two={this.state.rowTwo} three={this.state.rowThree} draw={this.state.draw} winner={this.state.winner} turn={this.state.turn} arrayEquals={this.arrayEquals} didIWin={this.isThereAWinner} restart={this.restartGame} clearGame={this.clearGame} place={this.placeSymbol} emptyBlocks={this.state.emptyPlaces}/>;
		
	}	
}