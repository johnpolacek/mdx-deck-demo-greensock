import React from 'react'
import useTweenLite from './useTweenLite'
import { Power4 } from 'gsap'

export default props => {

  const [tweenRef] = useTweenLite(props.duration || 1, {startAt:{ scale: .01, rotation:-720, transformOrigin:"50% 50%"}, rotation: 0, scale: 1, opacity: 1, ease:Power4.easeOut, delay: props.delay || 0 })
  
  return (
    <div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}