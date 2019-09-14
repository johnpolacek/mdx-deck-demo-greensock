// based on: https://github.com/johnlindquist/use-gsap

import { useRef, useEffect } from 'react'
import { TweenMax } from 'gsap'

export default (duration, options, onMount = true) => {
  let ref = useRef(null)
  useEffect(() => {
    TweenMax.to(ref.current, duration, options)
  }, [ref])

  return [ref]
}
