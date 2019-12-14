import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { StateProvider } from 'state'

import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Project from './Project'

export default class App extends Component {    
    render() {        
        return (
            <StateProvider>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/portfolio/:project" component={Project} />                                             
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="*" render={() => <div>Under Construction</div>} />
                </Switch>
            </StateProvider>
        )
    }
}
