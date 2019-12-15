import React from 'react'
import { Image } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom'

import { useGlobalState } from 'state'
import { ADD_OPEN_PROJECT, REMOVE_OPEN_PROJECT } from 'actions'

import Books from 'components/Project/Books'
import bitcoin from 'public/images/bitcoin.png'
import './index.css'

export const Portfolio = () => {
    const param = useParams()[0]
    const { dispatch, state } = useGlobalState() 

    React.useEffect(() => {
        dispatch({ type: ADD_OPEN_PROJECT, payload: param })

        return () => dispatch({ type: REMOVE_OPEN_PROJECT })
    }, [param])

    if (state.openProject === '/books') {        
        return <Books />
    }

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
            <Link className='portfolio__project' to='/portfolio/books'>
                <i className="book icon"></i>
                <p>Search Google Books API</p>
            </Link>
        </section>
    )
}

export default Portfolio
