import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/portfolio">
                        <div>Coming Soon!</div>
                    </Route>
                    <Route path="/contact">
                        <div>Contact</div>
                    </Route>
                    <Route path="*" render={() => <div>Under Construction</div>} />
                </Switch>
            </Router>
        )
    }
}
