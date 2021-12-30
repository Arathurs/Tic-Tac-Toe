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
		return !this.props.arrayEquals(this.props.data,nextProps.data);
	}
	
	handleClick(e) {		
		const string = e.target.textContent;				
		if(!string) {			
			const indexInArr = e.target.dataset.index,
				temp = this.props.data.slice(),
				row = this.props.arrName;
			let	obj = {},
				player;
			
			if (!this.props.gameResults && !this.props.turn) {
				player = constants.symbols.x;
				obj.firstPlayer = constants.players.human;
				obj.player = constants.symbols.o;
				obj.turn = constants.players.computer;
			} else if (!this.props.gameResults && this.props.turn) {
				player = this.props.player;
				obj.player = this.props.player === constants.symbols.x ? constants.symbols.o : constants.symbols.x;
				obj.turn = constants.players.computer;		
			}
			
			temp[indexInArr] = player;	
			obj[row] = temp.slice();
			
			const win = this.props.didIWin(player, obj[row], row);
	        if(win) {
				const stateObject = Object.assign({}, obj, win);
				obj = stateObject;
			} else if (this.props.emptyPlaces.length === 1 && constants.players.human  === this.props.firstPlayer) {
				obj.gameResults = constants.symbols.xo;	
			}
			this.props.place(obj);
		}	
	}		
	
	render() {	
		const dataPoints = this.props.data.map((data, i) => (
		    data === constants.symbols.x ? <td style={{color: styles.colors.black}} key={"data_"+i} data-index={i} onClick={this.handleClick} >{data}</td> :
			data === constants.symbols.o ? <td style={{color: styles.colors.eggShell}} key={"data_"+i} data-index={i} onClick={this.handleClick} >{data}</td> :
			<td key={"data_"+i} data-index={i} onClick={this.handleClick} >{data}</td>	
		));
		
		return <tr>{dataPoints}</tr>;	
	}
}