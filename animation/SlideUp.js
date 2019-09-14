import React from 'react'
import useTweenLite from './useTweenLite'
import { Power4 } from 'gsap'

export default props => {

  const [tweenRef] = useTweenLite(props.duration || .5, {startAt:{ y: '100vh', opacity: 1}, y: '0', ease:Power4.easeOut, delay: props.delay || 0 })
  
  return (
    <div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}