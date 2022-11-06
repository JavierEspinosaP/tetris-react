import React from 'react'
import Board from './Board'
import useBoard from '../../hooks/useBoard'
import GameStats from '../GameStats'
import useGameStats from '../../hooks/useGameStats'
import Previews from '../Tetris/Previews'

function Tetris({rows, columns, setGameOver}) {
  const [gameStats, addLinesCleared] = useGameStats()
  const [board, setBoard] = useBoard({rows, columns})

  const player = {tetrominoes : []}

  return (
    <div className="tetris">
      <GameStats gameStats={gameStats} />      
      <Board board={board}/>
      <Previews tetrominoes={player.tetrominoes}/>

    </div>
  )
}

export default Tetris
