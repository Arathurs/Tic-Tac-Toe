import React from 'react';

export const TitleText = props => {
	
	return <h1 style={{textAlign: 'center'}}>{!props.render ? '' : props.render(props.player)}{props.message}</h1>;
			
};