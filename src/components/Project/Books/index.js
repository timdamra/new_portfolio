import React, { useState, useEffect } from 'react'
import { Button, Input } from 'semantic-ui-react'

import BookTile from './BookTile'

import './index.css'

export const Books = () => {
    const [inputValue, setInputValue] = useState('')
    const [query, setQuery] = useState('')
    const [titles, setTitles] = useState(null)
    const [filter, setFilter] = useState('')
    
    const onChangeHandler = e => {        
        setInputValue(e.target.value)
    }
    const onClickHandler = filterType => {             
        setQuery(inputValue)
        setInputValue('')       
        setFilter(filterType)       
    }    

    async function fetchBooksFromApi(queryTerm) {    
        if (!queryTerm) {       
    
            return
        }          
    
        const booksApi = filter.length === 0 
        ? `https://www.googleapis.com/books/v1/volumes?q=${queryTerm}&maxResults=5` 
        : `https://www.googleapis.com/books/v1/volumes?q=${queryTerm}&maxResults=5&${filter}`

        const res = await fetch(booksApi)  
        const resolvedRes = await res.json()   
    
        return resolvedRes            
    }

    useEffect(() => {
        const data = fetchBooksFromApi(query)
        
        data.then(res => {                          
            if (res && res.items && res.items.length > 0) {
                setTitles(res.items)
            }            
        })
    }, [query, filter])    

    return (
        <section className="books">
          <Input onChange={onChangeHandler} value={inputValue} placeholder='Topic name' />  
          <div className="books__tile__buttons m-t-12">
              <Button onClick={() => onClickHandler('')} basic color='olive'>All</Button>
              <Button onClick={() => onClickHandler('filter=free-ebooks')} basic color='teal'>Free eBooks</Button>
              <Button onClick={() => onClickHandler('filter=paid-ebooks')} basic color='blue'>Paid eBooks</Button>
          </div>
          <div className="m-t-24 ta-center">
            {titles && titles.length > 0 ? (
                titles.map((book, idx) => (
                    <BookTile idx={idx} key={book.volumeInfo.title + idx} book={book} />
                ))
            ) : null}
          </div>
        </section>
    )
}

export default Books
