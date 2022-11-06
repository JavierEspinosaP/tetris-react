import React from 'react'
import Preview from './Preview'
import { v4 as uuidv4 } from 'uuid';

const Previews = ({tetrominoes}) => {

  const previewTetrominoes = tetrominoes.slice(1 - tetrominoes.length).reverse();



  return (
    <div>
        {previewTetrominoes.map((tetromino, index) => (
          <Preview tetromino={tetromino} index={index} key={uuidv4()}/>
        ))}
    </div>
  )
}

export default React.memo(Previews)
