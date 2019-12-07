import React, { Component } from 'react'

import CardComponent from './CardComponent'
import './index.css'

export class Home extends Component {
    render() {
        return (
            <main className="home__grid">
                <CardComponent />
            </main>
        )
    }
}

export default Home