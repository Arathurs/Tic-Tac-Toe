import React from 'react';
import '../App.css';
import { styles } from '../assets/styles';
import { constants } from '../assets/constants';

export class TableRow extends React.Component {	
	constructor(props) {		
		super(props);				
		
		this.handleClick = this.handleClick.bind(this);	
	}		
	
	shouldComponentUpdate(nextProps) {
		//console.log(this.arrayEquals(this.props.data,nextProps.data),'should');
		//const notEqual = this.arrayEquals(this.props.data,nextProps.data);
		//const notEqualTwo = !this.arrayEquals(this.props.data,nextProps.data);
		//console.log(notEqualTwo);
		return !this.props.arrayEquals(this.props.data,nextProps.data);
	}
	
	handleClick(e) {		
			
		const string = e.target.textContent;				
		
		if(!string) {			
			console.log('got here human turn');			
			
			const indexInArr = e.target.dataset.index,
				temp = this.props.data.slice(),
				row = this.props.arrName;
			let	obj = {},
				player;
			if (!this.props.draw && !this.props.winner && !this.props.turn) {
				player = constants.symbols.x;
				obj[constants.statePropertyNames.firstPlayer] = constants.players.human;
				obj[constants.statePropertyNames.player] = constants.symbols.o;
				obj[constants.statePropertyNames.turn] = constants.players.computer;
			
			} else if (!this.props.draw && !this.props.winner && this.props.turn) {
				player = this.props.player;
				obj[constants.statePropertyNames.player] = this.props.player === constants.symbols.x ? constants.symbols.o : constants.symbols.x;
				obj[constants.statePropertyNames.turn] = constants.players.computer;	
				
			}
						
			
			console.log('got here two',temp, indexInArr, player);
			temp[indexInArr] = player;	
			obj[row] = temp.slice();
			console.log(temp,'test',player, obj[row]);
			
			const win = this.props.didIWin(player, obj[row], row);
		
			if(win) {
				console.log('before change: ',obj);
				const stateObject = Object.assign({}, obj, win);
				obj = stateObject;
				console.log('after change: ',obj);
			} else if (!win && this.props.emptyBlocks.length === 1) {
				
				obj[constants.statePropertyNames.draw] = true;
				obj[constants.statePropertyNames.turn] = null;
				
			}
		
			this.props.place(obj);
		}	
	}		
	
	render() {	
		console.log('table row is rendering');
		const dataPoints = this.props.data.map((data, i) => {
			if(data === constants.symbols.x) {
				
				return <td style={{color: styles.colors.black}} key={"data_"+i} data-index={i} onClick={this.handleClick} >{data}</td>;
			
			} else if(data === constants.symbols.o) {
				
				return <td style={{color: styles.colors.eggShell}} key={"data_"+i} data-index={i} onClick={this.handleClick} >{data}</td>;
			
			} else {
			
				return <td key={"data_"+i} data-index={i} onClick={this.handleClick} >{data}</td>;
			
			}	
		});
		
		return <tr>{dataPoints}</tr>;	
	
	}
}