import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'

export default class App extends Component {    
    render() {
        return (
            <Fragment>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="*" render={() => <div>Under Construction</div>} />
                </Switch>
            </Fragment>
        )
    }
}
