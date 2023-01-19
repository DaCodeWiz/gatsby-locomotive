import './Work.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef, useEffect } from "react"
import WK1 from '../../../images/primera.mp4'
import WK2 from '../../../images/work-2.mp4'
import beats from '../../../images/beats-ad.mp4'
import primeraSC from '../../../images/primera-sc.png'

gsap.registerPlugin(ScrollTrigger)

export default function Work(){

	const image1 = useRef(null)
	const image3 = useRef(null)
	const heading = useRef(null)

	useEffect(() => {
		//image 1
		gsap.fromTo(image1.current, { y: 100 }, { y: -130, scrollTrigger: { trigger: image1.current, scrub: true, }, })

		//image 3
		gsap.fromTo(image3.current, { y: -50 }, { y: 100, scrollTrigger: { trigger: image3.current, scrub: true, }, })

		//heading scroll trigger opening
		gsap.fromTo(heading.current,
			{ rotation: 6, opacity: 0, y: () => heading.current.clientHeight * .5 },
			{ rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: heading.current, start: 'center bottom' } })
	}, [])

	const handleMouseEnter = (event) => {
		//play video
		const video = event.target.children[1]
		if (video ? video.classList.contains('video') : false)
			video.play()

		//animation
		const text = event.target.children[2].children[0]
		if (text) {
			gsap.killTweensOf(text)
			gsap.fromTo(text, { rotation: 10, opacity: 0, y: () => text.clientHeight * .5 }, { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut' })
		}
	}

	const handleMouseLeave = (event) => {
		//pause video
		const video = event.target.children[1]
		if (video ? video.classList.contains('video') : false)
			video.pause()

		//animation
		const text = event.target.children[2].children[0]
		if (text) {
			gsap.killTweensOf(text)
			gsap.fromTo(text, { rotation: 0, opacity: 1, y: 0 }, { rotation: -10, y: -text.clientHeight, opacity: 0, duration: .5, ease: 'power4.easeOut' })
		}
	}

	return (
		<section className='column content-width' id='work-section'>
			<div className='anim'>
				<h1 ref={heading}>creations</h1>
			</div>
			<div className='row'>
				<div
					id='block-0'
					className='block'
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<img
						src={primeraSC}
						height='3113'
						alt='Project 1'
						loading='lazy'
					/>
					<video
						playsInline=''
						loop='loop'
						muted='muted'
						disablePictureInPicture=''
						className='video'>
						<source src={WK1} type='video/mp4' />
					</video>
					<div className='text-wrapper'>
						<p>
								<span>
									<strong>Under Development</strong>
								</span>
							<span> Currently Unavailable</span>
						</p>
					</div>
				</div>
				<div className='column' id='work-right-section'>
					<div className='row'>
						<svg
							viewBox='0 0 12 12'
							fill='#1D2C27'
							xmlns='http://www.w3.org/2000/svg'
							className='icon'
							data-v-669b4a84=''>
							<path d='M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z'></path>
						</svg>
						<span>Featured Projects</span>
					</div>
					<p className='quote'>
						<br />
						my works (currently ongoing...)
					</p>
					<div
						id='block-1'
						className='block'
						ref={image1}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<img src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80' alt={'picture of dude being cash money'}/>
						<video
							playsInline=''
							loop='loop'
							muted='muted'
							disablePictureInPicture=''
							className='video'>
							<source src={WK2} type='video/mp4' />
						</video>
						<div className='text-wrapper'>
							<p>
									<span>
										<strong>Under Development </strong>
									</span>
								<span>photography portfolio</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				{/* <div
						id='block-3'
						className='block'
						ref={image3}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<img src='/home/work/aebele-interiors-hero.webp' />
						<video
							playsInline=''
							loop='loop'
							muted='muted'
							disablePictureInPicture=''
							className='video'>
							<source
								src='https://a.storyblok.com/f/133769/x/6c4b3b49c3/featured-work-aebele.mp4'
								type='video/mp4'
							/>
						</video>
						<div className='text-wrapper'>
							<p>
								<span>
									<strong>Under Development </strong>
								</span>
								<span>overwhelming design</span>
							</p>
						</div>
					</div> */}
				<div
					id='block-2'
					className='block'
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<img src='https://images.unsplash.com/photo-1627697823116-42877786ac26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt={'dude is being extremely cash money'}/>
					<video
						playsInline=''
						loop='loop'
						muted='muted'
						disablePictureInPicture=''
						className='video'>
						<source src={beats} type='video/mp4' />
					</video>
					<div className='text-wrapper'>
						<p>
								<span>
									<strong>Coming Soon</strong>
								</span>
							<span>eCommerce store</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}