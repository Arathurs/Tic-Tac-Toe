import React from 'react'; 
import { constants } from '../assets/constants';
import { ChooseXOButton } from './ChooseXOButton';

export const ChoosePlayerButtons = props => (
	<div className="button-container">
		<ChooseXOButton playerChoice={constants.symbols.x} {...props} />
		<ChooseXOButton playerChoice={constants.symbols.o} {...props} />
	</div>
);