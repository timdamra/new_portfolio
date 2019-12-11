import React from 'react'
import { Image } from 'semantic-ui-react'

import bitcoin from 'public/images/bitcoin.png'
import './index.css'

export const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio__project">
                <Image src={bitcoin} size='small' /> 
                <a
                    target="_blank" 
                    rel="noopener noreferrer"
                    href='https://cryptocurrency-app.herokuapp.com/'
                >
                    Cryptocurrency Market App
                </a>
            </div>
        </section>
    )
}

export default Portfolio
