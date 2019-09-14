import React from 'react'
import useTweenLite from './useTweenLite'
import { Power4 } from 'gsap'

export default props => {

  const [tweenRef] = useTweenLite(props.duration || .5, {startAt:{ x: (Math.random() * 200-100) +'vw', y: (Math.random() * 200-100) +'vh', opacity: 1}, x:0, y:0, ease:Power4.easeOut, delay: (props.delay || 0) + .25 })
  
  return (
    <div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}