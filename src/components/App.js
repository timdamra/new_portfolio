import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { StateProvider } from 'state'

import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'

export default class App extends Component {    
    render() {     
        
        console.log(process.env.PUBLIC_URL)

        return (
            <StateProvider>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>                                       
                    <Route path="/portfolio*">
                        <Portfolio />    
                    </Route>                                                                                       
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/*" render={() => <div>Under Construction</div>} />
                </Switch>
            </StateProvider>
        )
    }
}
