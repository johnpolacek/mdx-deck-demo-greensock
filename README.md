# MDX	Deck with Greensock Animation

[![Netlify Status](https://api.netlify.com/api/v1/badges/41536d1d-d206-4630-ba26-142cbbec37e9/deploy-status)](https://app.netlify.com/sites/mdx-deck-greensock-demo/deploys)

Combining my favorite new React presentation deck awesome sauce ([MDX Deck](https://github.com/jxnblk/mdx-deck)) with my favorite old do-anything-you-can-imagine animation platform ([Greensock](https://greensock.com)).

This is a demo that takes the [MDX Deck Demo](https://github.com/jxnblk/mdx-deck/blob/master/docs/demo.mdx) by [Prolific AF Jxnblk](https://jxnblk.com/), a [hook](https://github.com/johnlindquist/use-gsap) that the great [John Lindquist](https://johnlindquist.com/) put together in probably 2 seconds and some ideas from my old [TweenDeck lib](https://johnpolacek.github.io/tweendeck/).

This is still a work-in-progress and I’m still trying to figure out how to work with it to be honest. Like, hey make sure you keep those extra linebreaks in there or you will have a bad time, plus assorted other oddness. Still, it feels like I might be on to something here!

## Getting Started

Download or clone the repo and then install the dependencies as per the usual.

~~~~
npm install
~~~~

The animation source files can be found in the `animation` directory.

Most animations will apply an animation (aka a Tween) to a div wrapper courtesy of a `useTweenLite` hook (for TweenMax, change it to `useTweenMax`. To avoid a flash of un-animated content, we set initial opacity to 0 then update it via Tween.

Because the animations use `TweenLite.to()` (see [Greensock docs](https://greensock.com/docs/TweenLite/static.to())), we use `startAt` to set the initial state of the properties to be animated.

*animation/Bounce.js*

~~~~
import React from 'react'
import useTweenLite from './useTweenLite'
import { Bounce } from 'gsap'


export default props => {

  const [tweenRef] = useTweenLite(props.duration || 1, {startAt:{ y: props.y || -200, x: props.x || 0}, opacity: 1, x:0 , y:0, ease:Bounce.easeOut, delay: props.delay || 0 })
  
  return (
    <div style={{opacity:0}} ref={tweenRef} {...props} />
  )
}
~~~~

We can also animate individual child elements in MDX, such as a list.

*animation/FadeInList.js*

~~~~
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
            const [tweenRefChild] = useTweenLite(1, {startAt:{opacity:0, y: '5vh'}, delay: (.5 * i) + fadeInDelay, ease: Expo.easeOut, opacity:1, y:0 })
            return <li style={{opacity:0}} {...props} ref={tweenRefChild}>{child.props.children}</li>
          })
        })
	    }
    </div>
  )
}
~~~~

Note: To get animations to play properly, you must include linebreaks above and below any wrapped content - see [github.com/mdx-js/mdx/issues/241](https://github.com/mdx-js/mdx/issues/241).

~~~~

<FadeIn delay={1.5} duration={1}>
## Will NOT animate
</FadeIn>

<FadeIn delay={1.5} duration={1}>

## WILL animate

</FadeIn>


~~~~


## Known Issues

- Trying to figure out how to add animations to the `<Appear/>` MDX Deck component
- On a deployed build, on the first navigation through slides the animation will beging to play, then restart (added delay to start of animations as a temp hack).



