import React from 'react'
import useTweenLite from './useTweenLite'
import { Power4 } from 'gsap'

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

export default props => {
  const [tweenRef] = useTweenLite(props.duration || 1, { startAt: { rotationZ:randomNumber(-20,20), rotationY:randomNumber(-60,60), rotationX:randomNumber(-30,30), perspective: 10, transformOrigin:'50% 50%'}, rotationX: 0, rotationY: 0, rotationZ: 0, opacity: 1, ease: Power4.easeOut, delay: (props.delay || 0) + .3 })
  
  return (
    <div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}