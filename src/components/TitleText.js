import React from 'react';

export const TitleText = props => (
	<h1 style={{textAlign: 'center'}}>{!props.render ? '' : props.render(props.player)}{props.message}</h1>
);