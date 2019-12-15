import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'

import BookTile from './BookTile'

import './index.css'

export const Books = () => {
    const [inputValue, setInputValue] = useState('')
    const [query, setQuery] = useState('')
    const [titles, setTitles] = useState(null)
    
    const onChangeHandler = e => {        
        setInputValue(e.target.value)
    }
    const onSubmitHandler = e => {    
        e.preventDefault()    
        setQuery(inputValue)
        setInputValue('')
    }    

    useEffect(() => {
        async function fetchBooksFromApi(queryTerm) {    
            if (!queryTerm) {       
        
                return
            }    
        
            const booksApi = `https://www.googleapis.com/books/v1/volumes?q=${queryTerm}&maxResults=5`
            const res = await fetch(booksApi)  
            const resolvedRes = await res.json()   
        
            return resolvedRes            
        }
        const data = fetchBooksFromApi(query)
        
        data.then(res => {               
            if (res && res.items && res.items.length > 0) {
                setTitles(res.items)
            }            
        })
    }, [query])    

    return (
        <section className="books">
          <Form onSubmit={onSubmitHandler}>
              <Form.Field>
                  <label>Find Books About Your Favorite Topic!</label>
                  <input onChange={onChangeHandler} value={inputValue} placeholder='Topic name' />
              </Form.Field>   
              <Button type='submit'>Submit</Button>
          </Form>
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
