import React from 'react';

export class ChooseXOButton extends React.Component {
	constructor(props) {
		super(props);
		this.chooseSymbol = this.chooseSymbol.bind(this);
	}
	
	chooseSymbol() {
		this.props.restart(this.props.playerChoice);
	}
	
	render() {
		return <button className='btn' onClick={this.chooseSymbol}>{this.props.playerChoice}</button>;
	}
}