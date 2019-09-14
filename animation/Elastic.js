import React from 'react'
import useTweenLite from './useTweenLite'
import { Elastic } from 'gsap'


export default props => {

  const [tweenRef] = useTweenLite(props.duration || 1, {startAt:{ y: props.y || -200, x: props.x || 0}, opacity: 1, x:0 , y:0, ease:Elastic.easeOut, delay: (props.delay || 0) + .3 })
  
  return (
    <div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}