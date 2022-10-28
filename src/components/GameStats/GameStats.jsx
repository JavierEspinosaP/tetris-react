import React from 'react'

function GameStats({ gameStats }) {

  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;


  return (
    <div className="gameStatsContainer">
      <div className="GameStats GameStats__right">
        <div>
        <p>Level</p>
        <p className="value">{level}</p>          
        </div>
        <div>
        <p>Lines to level</p>
        <p className="value">{linesToLevel}</p>          
        </div>
        <div>
        <p>Points</p>
        <p className="value">{points}</p>          
        </div>

      </div>
    </div>
  )
}

export default GameStats
