import React from 'react';

export const styles = {
	colors: {
		eggShell: 'rgb(242, 235, 211)',
		white: '#fff',
		black: '#000'
	},
	font: {
		fontWeight: 'bold'
	},
	opacity: {
		zero: 0,
		one: 1
	}
};

export const StylesContext = React.createContext(styles.colors.eggshell);
export const OpacityContext = React.createContext(styles.opacity.one);