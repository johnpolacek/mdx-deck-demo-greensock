import React from 'react'
import useTweenLite from './useTweenLite'
import { Power4 } from 'gsap'

export default props => {

  const [tweenRef] = useTweenLite(props.duration || 1, {startAt:{ rotationY:-720, opacity:0}, rotationY: 0, opacity: 1, ease:Power4.easeOut, delay: (props.delay || 0) + .25 })
  
  return (
    <div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}