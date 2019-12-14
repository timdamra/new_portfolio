import React from 'react'
import { useParams } from 'react-router-dom'

import { useGlobalState } from 'state'
import { ADD_OPEN_PROJECT, REMOVE_OPEN_PROJECT } from 'actions'

export const Books = () => {    
    const { dispatch, state } = useGlobalState()   
    const { project } = useParams()      
    
    React.useEffect(() => {
        dispatch({ type: ADD_OPEN_PROJECT, payload: project })

        return () => dispatch({ type: REMOVE_OPEN_PROJECT })
    }, [project])
    
    if (state.openProject === 'books') {        

        return <div>Books</div>
    }

    return null
}

export default Books
