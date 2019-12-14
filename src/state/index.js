/* eslint-disable */
import React, { createContext, useReducer, useContext } from 'react'

import { ADD_OPEN_PROJECT, REMOVE_OPEN_PROJECT } from 'actions'

const defaultState = {
    openProject: null
}

function rootReducer(state = defaultState, action = {}) {
    switch(action.type) {
        case ADD_OPEN_PROJECT:
            return { ...state, openProject: action.payload }
        case REMOVE_OPEN_PROJECT:
            return { ...state, openProject: null }
        default:
            return state
    }
}

// CREATES THE GLOBAL APP STATE USING REACT CONTEXT (initialized with null)
const GlobalState = createContext(null)

// CREATES CUSTOM HOOK WHICH MAKES GLOBAL STATE ACCESSIBLE TO COMPONENTS
export const useGlobalState = () => useContext(GlobalState)

export function StateProvider({ children }) {
    const [state, dispatch] = useReducer(rootReducer, defaultState)
    const value = { state, dispatch }

    /**
     * - USEREDUCER RETURNS STATE, DISPATCH
     * - THE `VALUE` PROP (a required prop for Context.Provider components) GETS BINDED TO `state` & `dispatch` FROM USEREDUCER
     * - GLOBALSTATE.PROVIDER PASSES `STATE` & `DISPATCH TO CHILDREN COMPONENTS (& subtree)      
     * */ 

    return (
        <GlobalState.Provider value={value}>
            {children}
        </GlobalState.Provider>
    )
}
