import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import './Loading.css'

export default function Loading() {
	const preloader = useRef(null)
	const loader = useRef(null)

	useEffect(() => {
		const animate = () => {
	gsap.fromTo(loader.current, {
		// from
		scale: 1
	},{
		// to
		duration: 1,
		scale: 5,
		delay: 1.3,
		ease: 'power4.inOut'
	})
	gsap.fromTo(preloader.current,{
		opacity: 1,
		y: 0
	},{
		duration: 1.6,
		opacity: 0,
		y: '-100vh',
		delay: 1.6,
		ease: 'power4.inOut'
	}) 
} 
setTimeout(() => requestAnimationFrame(animate), 1300)
}, [])
  return (
		<div id='preloader' ref={preloader}>
			<div id='loader' ref={loader}></div>
		</div>
	);
}
