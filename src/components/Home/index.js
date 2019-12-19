import React, { Component, Suspense, lazy } from 'react'
import { Image } from 'semantic-ui-react'

import { HOMEPAGE_CONTENT } from '../content'
import myPic from 'public/images/pic.jpg'
import reactPic from 'public/images/react.png'
import reduxPic from 'public/images/redux.png'
import nodePic from 'public/images/nodejs.png'
import pwaPic from 'public/images/pwa.png'

import './index.css'

const CardComponent = lazy(() => import('../UI/CardComponent'))
const InfoSection = lazy(() => import('./InfoSection'))

export class Home extends Component {  
    renderAbout = () => {
        return (
            <div key='renderAbout'>
                <h2>Welcome To My Portfolio!</h2>
                <h3>Interesting Fact:</h3>
                <p>
                    I built this portfolio using React Classes/Hooks, React Router and Firebase (as a backend service).
                    I wrote a &apos;mini&apos; Redux-like state management library to manage global application state using React hooks
                    and React.Context API.  In building it I used a custom Webpack build and custom linting/styling.  
                    I&apos;m in the process of adding a complete test environment using Jest/Enzyme and adding CI/CD very soon as well.  
                    So despite this portfolio&apos;s simple/humble appearance, it has the tools, engineering and capability 
                    to run an application much larger and much more complex than itself! You can see the code here: 
                </p>
                <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href='https://github.com/timdamra/new_portfolio'
                >
                        Code on Github
                </a>
            </div>
        )
    }

    renderLogos = () => {
        return (
            <div key='renderLogos' className="home__grid__images">
                <Image src={reactPic} size='small' />                
                <Image src={nodePic} size='small' />
                <Image src={pwaPic} size='small' />
                <Image src={reduxPic} size='small' />
            </div>
        )
    }

    render() {
        const renderProps = [
            this.renderAbout,
            this.renderLogos
        ]

        const {
            card: {
                header,
                icon,
                meta, 
                description
            }
        } = HOMEPAGE_CONTENT

        return (
            <main className="home__grid">
                <Suspense fallback={<div>Loading...</div>}>
                    <InfoSection renderProps={renderProps} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <CardComponent 
                      pic={myPic}
                      header={header}
                      icon={icon}
                      meta={meta}
                      description={description}
                    />
                </Suspense>                
            </main>
        )
    }
}

export default Home
