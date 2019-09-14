import React from 'react'
import useTweenLite from './useTweenLite'
import { Expo } from 'gsap'

export default props => {

  const [tweenRef] = useTweenLite(props.duration || .5, {startAt:{opacity: 1} })
  const fadeInDelay = props.delay
  
  return (
    <div style={{opacity:0}} ref={tweenRef}>
    	{	
        React.Children.map(props.children, (child, i) => {
          return React.Children.map(child.props.children, (child, i) => {
            const [tweenRefChild] = useTweenLite(1, {startAt:{opacity:0, y: '5vh'}, delay: (1 * i) + fadeInDelay, ease: Expo.easeOut, opacity:1, y:0 })
            return <li style={{opacity:0}} {...props} ref={tweenRefChild}>{child.props.children}</li>
          })
        })
	    }
    </div>
  )
}