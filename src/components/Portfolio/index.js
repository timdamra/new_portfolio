import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'

import { PORTFOLIO_CONTENT } from '../content'
import { useGlobalState } from 'state'
import { ADD_OPEN_PROJECT, REMOVE_OPEN_PROJECT } from 'actions'

import './index.css'

const CardComponent = lazy(() => import('../UI/CardComponent'))

export const Portfolio = () => {
  const param = useParams()[0]
  const { dispatch } = useGlobalState()
  const {
    crypto: { header: cryptoHeader, link: cryptoLink, labelList: cryptoList },
    books: { header: booksHeader, link: booksLink, labelList: booksList },
    tictactoe: { header: ticTacHeader, link: ticTacLink, labelList: ticTacList }
  } = PORTFOLIO_CONTENT

  React.useEffect(() => {
    dispatch({ type: ADD_OPEN_PROJECT, payload: param })

    return () => dispatch({ type: REMOVE_OPEN_PROJECT })
  }, [param])

  return (
    <section className="portfolio">
      <div className="portfolio__project portfolio__icon--link">
        <Suspense fallback={<div>Loading...</div>}>
          <CardComponent
            imgIcon="bitcoin icon"
            header={cryptoHeader}
            labelList={cryptoList}
            link={cryptoLink}
          />
        </Suspense>
      </div>
      <div className="portfolio__project portfolio__icon--link">
        <Suspense fallback={<div>Loading...</div>}>
          <CardComponent
            imgIcon="book icon"
            header={booksHeader}
            labelList={booksList}
            link={booksLink}
          />
        </Suspense>
      </div>
      <div className="portfolio__project portfolio__icon--link">
        <Suspense fallback={<div>Loading...</div>}>
          <CardComponent
            imgIcon="game icon"
            header={ticTacHeader}
            labelList={ticTacList}
            link={ticTacLink}
          />
        </Suspense>
      </div>
    </section>
  )
}

export default Portfolio
