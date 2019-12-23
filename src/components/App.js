import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import { StateProvider } from 'state'

import Nav from './Nav'
import Home from './Home'
import Portfolio from './Portfolio'
import Books from './Project/Books'

const Contact = lazy(() => import('./Contact'))

export default class App extends Component {    
    render() {
        return (
            <StateProvider>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>   
                    <Route path="/books">
                        <Books />    
                    </Route>                                     
                    <Route path="/portfolio">
                        <Portfolio />    
                    </Route>                                                                                       
                    <Route path="/contact">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Contact />
                        </Suspense>
                    </Route>
                    <Route path="/*" render={() => <div>Under Construction</div>} />
                </Switch>
            </StateProvider>
        )
    }
}
