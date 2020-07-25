import React from 'react';

export function DisplayNotificationContainer (props) {

	return (
		
		<div className="background-position notification-background" style={{color: 'rgb(84, 84, 84)', opacity: 1, Index: '4', lineHeight: '236px', visibility: 'inherit', height: 216}} >
						
			<div className="display-notification" style={{ opacity: 1}} >
							
				<div className="notification-container">
					
					{props.render(props.winner)}
								
				</div>
						
			</div>
		
		</div>
		
	);

}