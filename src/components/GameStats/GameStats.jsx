import React from 'react'

function GameStats({ gameStats }) {

  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;


  return (
      <div className="GameStats">
        <div className="gameStatsCells">
        <p>Level</p>
        <p className="value">{level}</p>          
        </div>
        <div className="gameStatsCells">
        <p>Lines to level</p>
        <p className="value">{linesToLevel}</p>          
        </div>
        <div className="gameStatsCells">
        <p>Points</p>
        <p className="value">{points}</p>          
      </div>
    </div>
  )
}

export default GameStats
