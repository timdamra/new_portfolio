/* eslint-disable */
import React, {createContext, useReducer, useContext} from 'react';

import * as actions from 'actions';
import ticTacReducer, {defaultTicTacState} from './tictac_reducer';

const defaultState = {
  openProject: null,
  ...defaultTicTacState,
};

function rootReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case actions.ADD_OPEN_PROJECT:
      return {...state, openProject: action.payload};
    case actions.REMOVE_OPEN_PROJECT:
      return {...state, openProject: null};
    case actions.TIC_TAC_TOE_OPEN_MODAL:
      return {...state, ticTacModalIsOpen: true};
    case actions.TIC_TAC_TOE_CLOSE_MODAL:
      return {
        ...state,
        ticTacModalIsOpen: false,
        ticTacStartButtonIsHidden: true,
      };
    case actions.RESET_TIC_TAC:
      return {
        ...state,
        ...defaultTicTacState,
        score: state.score,
        usersCharacter: state.usersCharacter,
        computerCharacter: state.computerCharacter,
        ticTacStartButtonIsHidden: state.ticTacStartButtonIsHidden,
      };
    case actions.TIC_TAC_SET_USER_CHARACTER:
      return {
        ...state,
        usersCharacter: action.payload.usersCharacter,
        computerCharacter: action.payload.computerCharacter,
      };
    case actions.UPDATE_TIC_TAC_BOARD:
      return ticTacReducer(state, action);
    default:
      return state;
  }
}

// CREATES THE GLOBAL APP STATE USING REACT CONTEXT (initialized with null)
const GlobalState = createContext(null);

// CREATES CUSTOM HOOK WHICH MAKES GLOBAL STATE ACCESSIBLE TO COMPONENTS
export const useGlobalState = () => useContext(GlobalState);

export function StateProvider({children}) {
  const [state, dispatch] = useReducer(rootReducer, defaultState);
  const value = {state, dispatch};

  /**
   * - USEREDUCER RETURNS STATE, DISPATCH
   * - THE `VALUE` PROP (a required prop for Context.Provider components) GETS BINDED TO `state` & `dispatch` FROM USEREDUCER
   * - GLOBALSTATE.PROVIDER PASSES `STATE` & `DISPATCH TO CHILDREN COMPONENTS (& subtree)
   * */

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
}
