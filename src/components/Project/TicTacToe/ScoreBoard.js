import React from 'react'

export const ScoreBoard = props => {
  const { score, usersCharacter, computerCharacter } = props

  return (
    <div className="tictactoe__scoreboard">
      <span className="tictactoe__scoreboard--span">
        {usersCharacter}:{' '}
        <span className="tictactoe__scoreboard--span--score">
          {score[usersCharacter]}
        </span>
      </span>
      <span className="tictactoe__scoreboard--span">
        {computerCharacter}:{' '}
        <span className="tictactoe__scoreboard--span--score">
          {score[computerCharacter]}
        </span>
      </span>
    </div>
  )
}

export default ScoreBoard
