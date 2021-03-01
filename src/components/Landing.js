import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {Grid} from "@material-ui/core"

import Features from "./Features";


const Landing = () => {
	return (
		<Fragment>
		
			<section className="landing">
				<div className="container-landing">
					<div className="landing-inner">
						<h2 className="large">
							Eaze brings the team together, wherever you are
						</h2>
						<p className="lead">
							With all of your communication and tools in one place, remote
							teams will stay productive no matter where you’re working from.
						</p>
						<div className="buttons">
							<Link to="/download" className="btn">
								Download
							</Link>
							<Link to="/register" className="btn">
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Features />
		</Fragment>
	);
};

export default Landing;
