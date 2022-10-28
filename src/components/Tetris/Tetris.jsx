import React from 'react'
import Board from './Board'
import useBoard from '../../hooks/useBoard'
import GameStats from '../GameStats'
import useGameStats from '../../hooks/useGameStats'

function Tetris({rows, columns, setGameOver}) {
  const [gameStats, addLinesCleared] = useGameStats()
  const [board, setBoard] = useBoard({rows, columns})

  return (
    <div className="tetris">
      <Board board={board}/>
      <GameStats gameStats={gameStats} />
    </div>
  )
}

export default Tetris
