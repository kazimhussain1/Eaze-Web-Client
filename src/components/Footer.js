import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Instagram from "../img/instagram-icon.png";
import Twitter from "../img/twitter-icon.png";
import Facebook from "../img/facebook-icon.png";

const Footer = () => {
	return (
		<Fragment>
			<footer className="footer">
				<div className="container-footer">
					<h2 className="large">Choose a better way to work</h2>
					<div>
						<Link to="/download" className="btn">
							Download
						</Link>
						<Link to="/register" className="btn">
							Get Started
						</Link>
					</div>
				</div>
			</footer>
			<div className="container">
				<div className="copyrights">
					<p>© Copyright 2020 Eaze. All rights reserved.</p>
					<div className="social-links">
						<Link to="/instagram">
							<img src={Instagram} alt="Instagram" />
						</Link>
						<Link to="/twitter">
							<img src={Twitter} alt="Teitter" />
						</Link>
						<Link to="/facebook">
							<img src={Facebook} alt="Facebook" />
						</Link>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Footer;
