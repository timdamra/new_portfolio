import React from 'react'
import { useParams } from 'react-router-dom'

import { useGlobalState } from 'state'
import { ADD_OPEN_PROJECT, REMOVE_OPEN_PROJECT } from 'actions'

import Books from './Books'

const paramMap = {
    books: Books
}

export const Project = () => {    
    const { dispatch, state } = useGlobalState()   
    const { project } = useParams()   
    
    React.useEffect(() => {
        dispatch({ type: ADD_OPEN_PROJECT, payload: project })

        return () => dispatch({ type: REMOVE_OPEN_PROJECT })
    }, [project])
    
    if (state.openProject in paramMap) {
        console.log({
            state,
            project
        })
        return paramMap[state.openProject]()
    }

    return null
}

export default Project
