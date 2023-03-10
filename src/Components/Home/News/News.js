import './News.css'
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import vid1 from '../../../images/caspian.mp4'
import img2 from '../../../images/sebastien-bourguet-ZI1FT0B68K8-unsplash.jpg'
import img3 from '../../../images/casey-olsen-2s11AHnb_SU-unsplash.jpg'
import img4 from '../../../images/video1.mp4'

gsap.registerPlugin(ScrollTrigger)

export default function News() {

    const wrapper = useRef(null)
    const image1 = useRef(null)
    const image2 = useRef(null)
    const image3 = useRef(null)
    const image4 = useRef(null)
    const heading0 = useRef(null)
    const heading1 = useRef(null)

    useEffect(() => {
        //Image 0
        gsap.to(wrapper.current, {
            y: () => window.innerHeight * .15,
            scrollTrigger: { trigger: wrapper.current, scrub: true, end: 'bottom' }
        })

        //Image 1
        gsap.to(image1.current, {
            x: () => -window.innerWidth * .12,
            y: () => -window.innerHeight * .1,
            scrollTrigger: { trigger: image1.current, scrub: .98, start: 'top bottom', end: 'bottom top', endTrigger: wrapper.current }
        })

        //Image 2
        gsap.to(image2.current, {
            x: () => window.innerWidth * .16,
            y: () => -window.innerHeight * .03,
            scrollTrigger: { trigger: image2.current, scrub: .98, start: 'top bottom', end: 'bottom top', endTrigger: wrapper.current }
        })

        //Image 3
        gsap.to(image3.current, {
            x: () => -window.innerWidth * .14,
            scrollTrigger: { trigger: image3.current, scrub: .98, start: 'top bottom', end: 'bottom top' }
        })

        //Image 4
        gsap.to(image4.current, {
            x: () => window.innerWidth * .15,
            scrollTrigger: { trigger: image4.current, scrub: .98, start: 'top bottom', end: 'bottom top' }
        })

        //heading scroll trigger opening
        gsap.fromTo(heading0.current,
            { rotation: 6, opacity: 0, y: () => heading0.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: heading1.current, start: 'center bottom' } })

        gsap.fromTo(heading1.current,
            { rotation: 6, opacity: 0, y: () => heading1.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: heading1.current, start: 'center bottom' } })
    }, [])

    return (
			<div id='news-container' className='center column'>
				<div id='news-media-container' ref={wrapper}>
					<div className='news-media'>
						<video
							playsInline=''
							loop='loop'
							muted='muted'
							autoPlay='autoPlay'
							disablePictureInPicture=''>
							<source src={vid1} type='video/mp4' />
						</video>
					</div>
					<div className='news-media' ref={image1}>
						<picture>
							<source
								src='https://images.pexels.com/photos/2121665/pexels-photo-2121665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								type='image/webp'/>
							<img src='https://images.pexels.com/photos/2121665/pexels-photo-2121665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
							loading='lazy'
							alt='luh shawty sign' />
						</picture>
					</div>
					<div className='news-media' ref={image2}>
						<picture id='3643671' data-v-4a179df6=''>
							<source
								type='image/webp'
								srcSet={img2}
							/>
							<img
								src={img3}
								alt='a guy holding a camera'
								loading='lazy'
							/>
						</picture>
					</div>
					<div className='news-media' ref={image3}>
						<picture>
							<source
								type='image/webp'
								srcSet={img3}
							/>
							<img
								alt='welcome sign'
								loading='lazy'
							/>
						</picture>
					</div>
					<div className='news-media' ref={image4}>
						<video
							playsInline=''
							loop='loop'
							muted='muted'
							autoPlay='autoPlay'
							disablePictureInPicture=''>
							<source src={img4} type='video/mp4' />
						</video>
					</div>
				</div>
				<div className='row'>
					<svg
						viewBox='0 0 12 12'
						fill='#fff'
						xmlns='http://www.w3.org/2000/svg'
						className='icon'
						data-v-669b4a84=''>
						<path d='M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z'></path>
					</svg>
					<p className='news-small-heading'>popularity</p>
				</div>
				<h2>
					<div className='anim'>
						<div ref={heading0}>let's</div>
					</div>
					<div className='anim'>
						<div ref={heading1}>talk</div>
					</div>
				</h2>
				<p className='news-text'>
					i am interested in working with you,
					<br />
					any inquiries or requests are welcome to contact me.
				</p>
			</div>
		);
}