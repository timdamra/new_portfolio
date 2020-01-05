import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

import { useGlobalState } from 'state'
import * as actions from 'actions'

import './index.css'

export const TicTacToe = () => {
  const { state, dispatch } = useGlobalState()
  // console.log(state)
  const {
    ticTacModalIsOpen,
    ticTacStartButtonIsHidden,
    ticTacBoard,
    gameIsOver
  } = state

  return (
    <section className="tictactoe">
      <div>
        <span
          onClick={() =>
            !ticTacBoard[0] &&
            !gameIsOver &&
            dispatch({ type: actions.UPDATE_TIC_TAC_BOARD, payload: 0 })
          }
        >
          {ticTacBoard[0]}
        </span>
        <span
          onClick={() =>
            !ticTacBoard[1] &&
            !gameIsOver &&
            dispatch({ type: actions.UPDATE_TIC_TAC_BOARD, payload: 1 })
          }
        >
          {ticTacBoard[1]}
        </span>
        <span
          onClick={() =>
            !ticTacBoard[2] &&
            !gameIsOver &&
            dispatch({ type: actions.UPDATE_TIC_TAC_BOARD, payload: 2 })
          }
        >
          {ticTacBoard[2]}
        </span>
      </div>
      <div>
        <span
          onClick={() =>
            !ticTacBoard[3] &&
            !gameIsOver &&
            dispatch({ type: actions.UPDATE_TIC_TAC_BOARD, payload: 3 })
          }
        >
          {ticTacBoard[3]}
        </span>
        <span
          onClick={() =>
            !ticTacBoard[4] &&
            !gameIsOver &&
            dispatch({ type: actions.UPDATE_TIC_TAC_BOARD, payload: 4 })
          }
        >
          {ticTacBoard[4]}
        </span>
        <span
          onClick={() =>
            !ticTacBoard[5] &&
            !gameIsOver &&
            dispatch({ type: actions.UPDATE_TIC_TAC_BOARD, payload: 5 })
          }
        >
          {ticTacBoard[5]}
        </span>
      </div>
      <div>
        <span
          onClick={() =>
            !ticTacBoard[6] &&
            !gameIsOver &&
            dispatch({ type: actions.UPDATE_TIC_TAC_BOARD, payload: 6 })
          }
        >
          {ticTacBoard[6]}
        </span>
        <span
          onClick={() =>
            !ticTacBoard[7] &&
            !gameIsOver &&
            dispatch({ type: actions.UPDATE_TIC_TAC_BOARD, payload: 7 })
          }
        >
          {ticTacBoard[7]}
        </span>
        <span
          onClick={() =>
            !ticTacBoard[8] &&
            !gameIsOver &&
            dispatch({ type: actions.UPDATE_TIC_TAC_BOARD, payload: 8 })
          }
        >
          {ticTacBoard[8]}
        </span>
      </div>
      {ticTacStartButtonIsHidden ? (
        <Button onClick={() => dispatch({ type: actions.RESET_TIC_TAC })}>
          RESET
        </Button>
      ) : (
        <Button
          onClick={() => dispatch({ type: actions.TIC_TAC_TOE_OPEN_MODAL })}
        >
          START
        </Button>
      )}
      <Modal
        size="mini"
        open={ticTacModalIsOpen}
        onClose={() => dispatch({ type: actions.TIC_TAC_TOE_CLOSE_MODAL })}
      >
        <Modal.Header>Choose Your Letter</Modal.Header>
        <Modal.Content>
          <p>X or O ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="X"
            onClick={() => {
              dispatch({
                type: actions.TIC_TAC_SET_USER_CHARACTER,
                payload: {
                  usersCharacter: 'X',
                  computerCharacter: 'O'
                }
              })
              dispatch({ type: actions.TIC_TAC_TOE_CLOSE_MODAL })
            }}
          />
          <Button
            content="O"
            onClick={() => {
              dispatch({
                type: actions.TIC_TAC_SET_USER_CHARACTER,
                payload: {
                  usersCharacter: 'O',
                  computerCharacter: 'X'
                }
              })
              dispatch({ type: actions.TIC_TAC_TOE_CLOSE_MODAL })
            }}
          />
        </Modal.Actions>
      </Modal>
    </section>
  )
}

export default TicTacToe
