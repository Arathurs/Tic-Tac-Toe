import React from 'react';

export class ChooseXOButton extends React.Component {
	
	constructor(props) {
		
		super(props);
		
		this.chooseSymbol = this.chooseSymbol.bind(this);
	}
	
	chooseSymbol() {
		//console.log(this.props.playerChoice);
		this.props.restart(this.props.playerChoice);
	}
	render() {
		
		
		return (

			<div>
			
				<button onClick={this.chooseSymbol}>{this.props.playerChoice}</button>
		
			</div>
		);
	}
	
}