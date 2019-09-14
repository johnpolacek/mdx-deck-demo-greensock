import React from 'react'
import useTweenLite from './useTweenLite'
import { Power4 } from 'gsap'


export default props => {
  const [tweenRef] = useTweenLite(props.duration || 1, { startAt: { rotationZ: 720}, rotationZ: 0, opacity: 1, ease: Power4.easeOut, delay: (props.delay || 0) + .3 })
  
  return (
    <div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}