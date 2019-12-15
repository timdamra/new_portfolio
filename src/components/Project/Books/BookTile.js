import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'

import './index.css'

export const BookTile = props => {
    const {
        book: {
            volumeInfo: {
                title = '',
                previewLink = '',
                imageLinks: {
                    smallThumbnail = ''
                } = {}
            } = {}
        } = {},
        idx
    } = props

    const isOddIdx = idx % 2 !== 0
    const className = isOddIdx ? 'books__tile p-t-12 p-b-24 books__tile--odd' : 'books__tile p-t-12 p-b-24'

    return (
        <a
            className={className}
            target="_blank" 
            rel="noopener noreferrer"
            href={previewLink}
        >
            <h4>{title}</h4>
            {smallThumbnail ? (
                <Image src={smallThumbnail} size='small' />
            ) : <p>Image Not Available</p>}
        </a>
        
    )
}

BookTile.propTypes = {
    book: PropTypes.shape({
        volumeInfo: PropTypes.shape({
            title: PropTypes.string,
            previewLink: PropTypes.string,
            imageLinks: PropTypes.shape({
                smallThumbnail: PropTypes.string      
            })
        })
    }),
    idx: PropTypes.number
}

export default BookTile
