import React from "react";
import { Link } from "react-router-dom";
import Screens from "../img/screens.png";

import Feature from "./Feature"

const Features = () => {
	return (
		<section className="features">
			<div className="container feature-title">
				<h2 className="large">One platform for your team and your work</h2>
				<p className="lead">
					All the features of Eaze work together so you can, too.
				</p>
			</div>
			<div className="container container-feature">
				<img src={Screens} alt="Screens" />
                <div className="features-content">
                    <Feature/>
                    <Feature/>
                    <Feature/>
                </div>
			</div>
		</section>
	);
};

export default Features;
