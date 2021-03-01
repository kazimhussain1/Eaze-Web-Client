import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import eazeLogo from "../img/eaze.png"

const Nav = () => {
	const guestLinks = (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/download">Download</Link>
			</li>
			<li>
				<Link to="/get-started" className="btn">Get Started</Link>
			</li>
		</ul>
	);

	return (
		<nav className="navbar">
			<div className="container container-nav">
				<Link to="/" className="logo">
					<img src={eazeLogo} />
				</Link>

				<Fragment>{guestLinks}</Fragment>
			</div>
		</nav>
	);
};

export default Nav;
