let usersCharacter = 'X'
let computerCharacter = 'O'

function areTruthy(a, b, c) {
  return Boolean(a && b && c)
}

export const defaultTicTacState = {
  ticTacModalIsOpen: false,
  ticTacStartButtonIsHidden: false,
  usersCharacter,
  computerCharacter,
  gameIsOver: false,
  winner: null,
  ticTacBoard: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null
  }
}

defaultTicTacState.score = {
  [defaultTicTacState.usersCharacter]: 0,
  [defaultTicTacState.computerCharacter]: 0
}

export function checkForWinner(ticTacBoard, state) {
  return Object.entries(ticTacBoard)
    .map(square => {
      let index1 = Number(square[0])

      return [index1, square[1]]
    })
    .reduce((acc, curr, idx) => {
      // curr[1] === X or O value
      // typeof idx === number && typeof curr[0] === number (index)

      /**
       * - CHECKS FOR:
       *  - INDEX OF SQUARE IS WITHIN THE BOARD (0 - 8) VIA ARETRUTHY
       *  - HORIZONTAL SEQUENCE IN TOP, MIDDLE & BOTTOM LAYERS
       *  - DIAGONAL IN MIDDLE LAYER SQUARES
       *  - VERTICAL (SAME CHARACTER IN TOP, MIDDLE BOTTOM)
       */

      let horizontalIdx = idx === 0 || idx === 3 || idx === 6
      let index1 = horizontalIdx && ticTacBoard[idx]
      let index2 = horizontalIdx && ticTacBoard[idx + 1]
      let index3 = horizontalIdx && ticTacBoard[idx + 2]
      let isHorizontalWin = index1 === index2 && index1 === index3

      if (curr[0] <= 2) {
        if (
          (areTruthy(index1, index2, index3) && isHorizontalWin) ||
          (areTruthy(index1, ticTacBoard[idx + 3], ticTacBoard[idx + 3]) &&
            ticTacBoard[idx] === ticTacBoard[idx + 3] &&
            ticTacBoard[idx] === ticTacBoard[idx + 6])
        ) {
          acc = curr[1]
        }
      } else if (curr[0] > 2 && curr[0] <= 5) {
        let isDiagonalWin =
          (ticTacBoard[0] === curr[1] &&
            areTruthy(ticTacBoard[0], ticTacBoard[4], ticTacBoard[8]) &&
            ticTacBoard[0] === ticTacBoard[4] &&
            ticTacBoard[0] === ticTacBoard[8]) ||
          (ticTacBoard[2] === curr[1] &&
            areTruthy(ticTacBoard[2], ticTacBoard[4], ticTacBoard[6]) &&
            ticTacBoard[2] === ticTacBoard[4] &&
            ticTacBoard[2] === ticTacBoard[6])

        if (
          isDiagonalWin ||
          (areTruthy(index1, index2, index3) &&
            ((areTruthy(index1, index2, index3) && isHorizontalWin) ||
              (ticTacBoard[idx] === ticTacBoard[idx - 3] &&
                ticTacBoard[idx] === ticTacBoard[idx + 3])))
        ) {
          acc = curr[1]
        }
      } else if (
        (areTruthy(index1, index2, index3) && isHorizontalWin) ||
        (ticTacBoard[idx] === ticTacBoard[idx - 3] &&
          ticTacBoard[idx] === ticTacBoard[idx - 6])
      ) {
        acc = curr[1]
      }

      return acc
    }, null)
}

export default (state, action) => {
  const { payload } = action
  const ticTacBoard = {
    ...state.ticTacBoard,
    [payload]: state.usersCharacter
  }
  const userIsWinner = checkForWinner(ticTacBoard, state)
  let score

  if (userIsWinner) {
    score = {
      ...state.score,
      [state.usersCharacter]: (state.score[state.usersCharacter] += 1)
    }

    return {
      ...state,
      ticTacBoard,
      gameIsOver: true,
      winner: state.usersCharacter,
      score
    }
  } else {
    let i = 0

    for (; i <= 8;) {
      if (!ticTacBoard[i]) {
        ticTacBoard[i] = state.computerCharacter

        const computerIsWinner = checkForWinner(ticTacBoard, state)

        if (computerIsWinner) {
          score = {
            ...state.score,
            [state.computerCharacter]: (state.score[
              state.computerCharacter
            ] += 1)
          }

          return {
            ...state,
            ticTacBoard,
            gameIsOver: true,
            winner: state.computerCharacter,
            score
          }
        }

        break
      } else {
        i++
      }
    }
  }

  return { ...state, ticTacBoard, ticTacStartButtonIsHidden: true }
}
