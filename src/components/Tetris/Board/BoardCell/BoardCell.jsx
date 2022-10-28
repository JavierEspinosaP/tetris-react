import React from 'react'

function BoardCell({cell}) {
  return (
    <div className={`boardCell ${cell.className}`}>
      <div className="Sparkle"></div>
    </div>
  )
}

export default BoardCell
