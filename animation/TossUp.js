import React from 'react'
import useTweenLite from './useTweenLite'
import { Power4 } from 'gsap'

export default props => {

  const [tweenRef] = useTweenLite(props.duration || .5, {startAt:{ scale: .1, x: Math.floor(Math.random() * 600 -300),y: '100vh', rotation:-300}, scale:1, rotation: 0, x: 0, y: 0, opacity: 1, ease:Power4.easeInOut, delay: (props.delay || 0) + .25 })
  
  return (
    <div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}