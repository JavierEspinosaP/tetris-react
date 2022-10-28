import React from 'react'

function Menu({onClick}) {
  return (
    <div className="menu">
      <button className="buttonPlay" onClick={onClick}> Play </button>
      </div>
  )
}

export default Menu
