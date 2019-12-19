import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'

import { PORTFOLIO_CONTENT } from '../content'
import { useGlobalState } from 'state'
import { ADD_OPEN_PROJECT, REMOVE_OPEN_PROJECT } from 'actions'

import bitcoin from 'public/images/bitcoin.png'
import './index.css'

const CardComponent = lazy(() => import('../UI/CardComponent'))

export const Portfolio = () => {
    const param = useParams()[0]
    const { dispatch } = useGlobalState() 
    const {
        crypto: { header: cryptoHeader, link: cryptoLink, description: cryptoDescription },
        books: { header: booksHeader, link: booksLink, description: booksDescription }
    } = PORTFOLIO_CONTENT

    React.useEffect(() => {
        dispatch({ type: ADD_OPEN_PROJECT, payload: param })

        return () => dispatch({ type: REMOVE_OPEN_PROJECT })
    }, [param])        

    return (
        <section className="portfolio">
            <div className="portfolio__project">                
                <Suspense fallback={<div>Loading...</div>}>
                    <CardComponent 
                        pic={bitcoin}
                        header={cryptoHeader}
                        description={cryptoDescription}
                        link={cryptoLink}
                    />
                </Suspense>                  
            </div>
            <div className="portfolio__project portfolio__icon--link">
                <Suspense fallback={<div>Loading...</div>}>
                    <CardComponent 
                        imgIcon='book icon'
                        header={booksHeader}
                        description={booksDescription}
                        link={booksLink}
                    />
                </Suspense> 
            </div>            
        </section>
    )
}

export default Portfolio
