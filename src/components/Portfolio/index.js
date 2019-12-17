import React from 'react'
import { Image } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom'

import { PORTFOLIO_CONTENT } from '../content'
import { useGlobalState } from 'state'
import { ADD_OPEN_PROJECT, REMOVE_OPEN_PROJECT } from 'actions'

import bitcoin from 'public/images/bitcoin.png'
import './index.css'

export const Portfolio = () => {
    const param = useParams()[0]
    const { dispatch } = useGlobalState() 
    const {
        crypto: { label: cryptoLabel, link: cryptoLink },
        books: { label: booksLabel, link: booksLink }
    } = PORTFOLIO_CONTENT

    React.useEffect(() => {
        dispatch({ type: ADD_OPEN_PROJECT, payload: param })

        return () => dispatch({ type: REMOVE_OPEN_PROJECT })
    }, [param])        

    return (
        <section className="portfolio">
            <div className="portfolio__project">
                <Image src={bitcoin} size='small' /> 
                <a
                    target="_blank" 
                    rel="noopener noreferrer"
                    href={cryptoLink}
                >
                    {cryptoLabel}
                </a>
            </div>
            <Link className='portfolio__project' to={booksLink}>
                <i className="book icon"></i>
                <p>{booksLabel}</p>
            </Link>
        </section>
    )
}

export default Portfolio
