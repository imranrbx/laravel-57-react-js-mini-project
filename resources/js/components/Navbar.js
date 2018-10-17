import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Tasks from "./Tasks";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NoMatch from "./Pages/NoMatch";
import CustomRoute from "./CustomRoute";

class Navbar extends Component {
    render() {
        return (
            <Router basename="#">
                <Fragment>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">
                            React App
                        </Link>
                        <button
                            className="navbar-toggler hidden-lg-up"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/tasks"
                                        id="dropdownId">
                                        Tasks
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/contact"
                                        id="dropdownId">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <CustomRoute exact path="/tasks" component={Tasks} />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}
export default Navbar;
