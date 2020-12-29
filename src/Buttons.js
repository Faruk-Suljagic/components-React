import React from "react";
import "./Buttons.css";

const Buttons = () => {
	return (
		<div className='AllButtons'>
			<button className='theButton darkBlue'>Button</button>
			<button className='theButton transp'>Button</button>
			<button className='theButton red'>Button</button>
			<button className='theButton borderRed'>Button</button>
			<div className='list'>
				<p>This is a list</p>
				<div className='arrowBox'>
					<a href='#'>
						<i class='fas fa-chevron-down'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Buttons;
