import React from 'react';
import '../App.css';

const style = {
	color: {
		white: '#FFFFFF',
		black: '#000000'
	}
};

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
		//document.getElementsByClassName(".recipe-name").innerHTML;		
		const string = e.target.textContent;				
		
		if(!string) {			
			console.log('got here');			
			const indexInArr = e.target.dataset.index,
				temp = this.props.data.slice(),
				row = this.props.arrName,
				//missingRows = this.props.collectMissingRows(row),
				row2 = this.props.restOfData[0],
				row3 = this.props.restOfData[1];
			let	obj = {
					player: this.props.player === 'Player 1' ? 'Computer' : 'Player 1',
					playerSymbol: this.props.symbol === 'X' ? 'O' : 'X'
				};
			
				//const game = 'game';
				//obj[game] = true;
			console.log('got here two',temp);
			temp[indexInArr] = this.props.symbol;	
			obj[row] = temp.slice();
			console.log(temp,'test',this.props.player, obj[row], row2, row3);
			
			const win = this.props.didIWin(this.props.symbol, this.props.player, obj[row], row);
		
			if(win) {
				console.log('before change: ',obj);
				const stateObject = Object.assign({}, obj, win);
				obj = stateObject;
				console.log('after change: ',obj);
			} 
		
			this.props.place(obj);
		}	
	}		
	
	render() {	
		
		const dataPoints = this.props.data.map((point, i) => {
			if(point === 'X') {
				
				return <td style={{color: style.color.black}} key={"data_"+i} data-index={i} onClick={this.handleClick} >{ point }</td>;
			
			} else if(point === 'O') {
				
				return <td style={{color: style.color.white}} key={"data_"+i} data-index={i} onClick={this.handleClick} >{ point }</td>;
			
			} else {
			
				return <td key={"data_"+i} data-index={i} onClick={this.handleClick} >{ point }</td>;
			
			}	
		});
		
		return <tr>{dataPoints}</tr>;	
	
	}
}