import React from 'react'
import useTweenLite from './useTweenLite'


export default props => {

  const [tweenRef] = useTweenLite(props.duration || 1, { opacity: 1, delay: (props.delay || 0) + .3 })
  
  return (
  	<div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}