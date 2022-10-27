import React from 'react'
import Menu from '../Menu'

function Game({rows, columns}) {


  const start = () => {console.log("start")}
  return (
    <div className="game">
      <Menu onClick={start}/>
      {/* rows {rows} columns {columns} */}
      </div>
  )
}

export default Game
