/* eslint-disable */
import React, { createContext, useReducer, useContext } from 'react'

import * as actions from 'actions'

const defaultState = {
    openProject: null,
    ticTacModalIsOpen: false,
    ticTacStartButtonIsHidden: false,
    usersCharacter: 'X',
    computerCharacter: 'O',
    gameIsOver: false,
    ticTacBoard: {
        1: '', 2: '', 3: '',
        4: '', 5: '', 6: '',
        7: '', 8: '', 9: ''
    }
}

function rootReducer(state = defaultState, action = {}) {
    switch(action.type) {
        case actions.ADD_OPEN_PROJECT:
            return { ...state, openProject: action.payload }
        case actions.REMOVE_OPEN_PROJECT:
            return { ...state, openProject: null }
        case actions.TIC_TAC_TOE_OPEN_MODAL:
            return { ...state, ticTacModalIsOpen:true }
        case actions.TIC_TAC_TOE_CLOSE_MODAL:
            return { ...state, ticTacModalIsOpen:false, ticTacStartButtonIsHidden: true }
        case actions.TIC_TAC_SET_USER_CHARACTER:
            return { 
                ...state, 
                usersCharacter: action.payload.usersCharacter, 
                computerCharacter: action.payload.computerCharacter 
            }
        case actions.UPDATE_TIC_TAC_BOARD:
            const { payload } = action            

            const ticTacBoard = {
                ...state.ticTacBoard,
                [payload]: state.usersCharacter
            }

            let i = 1

            for ( ; i <=9 ; ) {
                // console.log(state.ticTacBoard[i] , state.ticTacBoard[i + 1] , state.ticTacBoard[i + 2])
                if (
                    (state.ticTacBoard[i] === state.ticTacBoard[i + 3] === state.ticTacBoard[i + 6] ||
                        state.ticTacBoard[i] === state.ticTacBoard[i + 1] === state.ticTacBoard[i + 2] ||
                        state.ticTacBoard[i] === state.ticTacBoard[i + 4] === state.ticTacBoard[i + 8]) || 
                    (state.ticTacBoard[i] === state.ticTacBoard[i - 3] === state.ticTacBoard[i - 6] ||
                        state.ticTacBoard[i] === state.ticTacBoard[i - 1] === state.ticTacBoard[i - 2] ||
                        state.ticTacBoard[i] === state.ticTacBoard[i - 4] === state.ticTacBoard[i - 8])
                ) {
                    return {
                        ...state,
                        gameIsOver: true
                    }
                }

                else if(!ticTacBoard[i]) {
                    ticTacBoard[i] = state.computerCharacter    
                    break                
                }                 
                
                else i++
            }

            return { ...state, ticTacBoard }
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
