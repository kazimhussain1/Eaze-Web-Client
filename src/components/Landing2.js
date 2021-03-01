import React, { Fragment } from "react"
import { Link } from "react-router-dom"

import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Grid, Hidden } from "@material-ui/core"

import backgroundImage from "../img/background6.png"

import Features from "./Features"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    cover: {
        height: "100%",
        backgroundImage: `url(${backgroundImage})`
    },
    coverImg: {
        height: "100%",
        objectFit: "cover",
        
    },
    content: {
        backgroundColor: "orange",
    },
}))

const Landing = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <Grid container className={classes.root}>
                <Grid
                    item
                    lg={5}
                    md={5}
                    xs={12}
                    sm={6}
                    className={classes.content}
                />

                <Grid item lg={7} md={7} xs={0} sm={6} className={classes.cover}>
                    {/* <img src={backgroundImage} className={classes.coverImg} /> */}
                </Grid>
            </Grid>

            {/* <section className="landing">
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
			</section> */}

            <Features />
        </Fragment>
    )
}

export default Landing
