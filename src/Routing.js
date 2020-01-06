import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './Components/Header'
import Home from './Pages/Home'

export default function Routing() {
    window.scrollBy({
        top: 1,
        left: 0,
        behavior: "smooth"
    });

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />

                </Switch>
            </div>
        </Router>
    );
}
