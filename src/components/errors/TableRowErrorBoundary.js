import React from 'react';

export class TableRowErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError : false};
	}
	
	static getDerivedStateFromError(error) {
		
		return { hasError: true};
		
	}
	
	componentDidCatch(error, errorInfo) {
	
		console.log(`${error} : ${errorInfo}`);
		
	}
	
	render() {
		
		if(this.state.hasError) {
		
			return <p>Something went wrong</p>;
		}
		
		return this.props.children;
	}
};