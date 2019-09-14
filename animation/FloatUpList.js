import React from 'react'
import useTweenLite from './useTweenLite'
import { Expo } from 'gsap'

export default props => {

  const [tweenRef] = useTweenLite(props.duration || .5, {startAt:{opacity: 1} })
  
  return (
    <div style={{opacity:0}} ref={tweenRef}>
    	{	
        React.Children.map(props.children, (child, i) => {
          return React.Children.map(child.props.children, (child, i) => {
            const [tweenRefChild] = useTweenLite(1 - (i * .1), {startAt:{x: (Math.random() * 100) - 50 +'vw' , y: '100vh',opacity:0}, delay: (.25 * i + .5), ease: Expo.easeOut, opacity:1, x: '0', y:'0' })
            return <li style={{opacity:0}} {...props} ref={tweenRefChild}>{child.props.children}</li>
          })
        })
	    }
    </div>
  )
}