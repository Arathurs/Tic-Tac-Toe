import React from 'react';
import '../App.css';

export class TableRow extends React.Component {	
	constructor(props) {		
		super(props);				
		
		this.handleClick = this.handleClick.bind(this);	
	}		
	
	arrayEquals(a,b) {
		
		return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
	}
	
	shouldComponentUpdate(nextProps) {
		//console.log(this.arrayEquals(this.props.data,nextProps.data),'should');
		//const notEqual = this.arrayEquals(this.props.data,nextProps.data);
		//const notEqualTwo = !this.arrayEquals(this.props.data,nextProps.data);
		//console.log(notEqualTwo);
		return !this.arrayEquals(this.props.data,nextProps.data);
	}
	
	handleClick(e) {		
		//document.getElementsByClassName(".recipe-name").innerHTML;		
		const string = e.target.textContent;				
		
		if(!string) {			
			console.log('got here');			
			const indexInArr = e.target.dataset.index,
				arrName = this.props.arrName,		    
			    temp = this.props.data.slice(),
				obj = {
					playerTurn: this.props.player === 'Player 1' ? 'Computer' : 'Player 1',
					playerSymbol: this.props.symbol === 'X' ? 'O' : 'X'
				};
			if(!this.props.game) {
				const game = 'game';
				obj[game] = true;
			}
			temp[indexInArr] = this.props.symbol;	
			obj[arrName] = temp;
			console.log(temp);			
			this.props.place(obj);
		}	
	}		
	
	render() {	
		
		const dataPoints = this.props.data.map((point, i) => <td key={"data_"+i} data-index={i} onClick={this.handleClick} >{ point }</td>);
		
		return <tr>{dataPoints}</tr>;	
	}
}