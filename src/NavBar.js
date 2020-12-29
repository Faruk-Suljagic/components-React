import React from "react";
import "./NavBar.css";

const navBar = () => {
	return (
		<div className='NavItem'>
			<i class='fas fa-home'></i>
			<i class='fas fa-envelope'></i>
			<i class='fas fa-info'></i>
			<i class='fas fa-cloud'></i>
			<i class='fas fa-heart'></i>
		</div>
	);
};

export default navBar;
