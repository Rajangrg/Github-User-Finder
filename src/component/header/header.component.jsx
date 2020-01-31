import React from 'react';
import './header.style.css'

const Header = (props) => (
	<div className="navbar">
	<h3>{props.children}</h3>
	</div>
)

export default Header;