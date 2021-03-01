import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"

import Nav from "./components/Nav"
import Landing from "./components/Landing"
import Landing2 from './components/Landing2'
import Footer from "./components/Footer"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import DashBoardPage from "./components/Dashboard"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signIn">
                    <SignIn />
                </Route>

                <Route path="/register">
                    <SignUp />
                </Route>

                <Route path="/dashboard">
                    <Fragment>
                        <DashBoardPage />
                    </Fragment>
                </Route>

                <Route path="/newLanding">
                    <Fragment>
                        {/* <Nav /> */}
                        <Landing2 />
                        <Footer />
                    </Fragment>
                </Route>

                <Route path="/">
                    <Fragment>
                        <Nav />
                        <Landing />
                        <Footer />
                    </Fragment>
                </Route>


            </Switch>
        </Router>
    )
}

export default App
