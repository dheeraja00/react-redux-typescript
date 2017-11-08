/*
  Spinner common component to be called when needed, to show spinners, 
  mostly useful when there is any kind of delay or waiting for response like waiting for API response
*/
import * as React from 'react';

const Spinner = () => {
  	return (
		<div className="preloader-wrapper small active">
			<div className="spinner-layer spinner-green-only">
				<div className="circle-clipper left">
					<div className="circle"></div>
				</div>
				<div className="gap-patch">
					<div className="circle"></div>
				</div>
				<div className="circle-clipper right">
					<div className="circle"></div>
				</div>
			</div>
		</div>
  	);
};

export { Spinner };