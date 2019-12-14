import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

import './index.css'

export const Books = () => {
    const [inputValue, setInputValue] = useState('')
    const onChangeHandler = e => {        
        setInputValue(e.target.value)
    }
    const onSubmitHandler = e => {
        e.preventDefault()

        console.log(e)
    }    

    return (
        <section>
          <Form onSubmit={onSubmitHandler} className="books">
              <Form.Field>
                  <label>Find Books About Your Favorite Topic!</label>
                  <input onChange={onChangeHandler} value={inputValue} placeholder='Topic name' />
              </Form.Field>   
              <Button type='submit'>Submit</Button>
          </Form>
        </section>
    )
}

export default Books
