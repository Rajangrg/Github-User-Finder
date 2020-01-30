import React from 'react';
import './header.style.css'

const Header = (props) => (
	<div className="navbar">
		{props.children}
	</div>
)

export default Header;