
import { useState } from 'react';
import './sprite.css'

import useKeyDown from '../hooks/useKeyDown';


const Sprite = (props) => {

  const {animal} = props;

  const [ frame, setFrame ] = useState(0)
  const [ direction, setDirection ] = useState(1)

  const imgStyles = {
    transform: `scaleX(${direction})`,
    left: -(frame * 48)
  }

  const moveRight = () => {
    setDirection(1)
    setFrame(prev => (
      prev < 5 ? prev + 1 : 0
    ))
  }

  const moveLeft = () => {
    setDirection(-1)
    setFrame(prev => (
      prev > 0 ? prev - 1 : 5
    ))
  }

  useKeyDown('j', moveRight);
  useKeyDown('f', moveLeft);



  return (
    <div className="sprite-container">
      <img className="sprite-img" src={`images/${animal}.png`} style={imgStyles}/>
    </div>
  )
}

export default Sprite;