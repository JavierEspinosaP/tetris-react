import React from 'react'
import Board from './Board'
import useBoard from '../../hooks/useBoard'

function Tetris({rows, columns, setGameOver}) {

  const [board, setBoard] = useBoard({rows, columns})

  return (
    <div className="tetris">
      <Board board={board}/>
    </div>
  )
}

export default Tetris
