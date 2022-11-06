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
      <GameStats gameStats={gameStats} />      
      <Board board={board}/>

    </div>
  )
}

export default Tetris
