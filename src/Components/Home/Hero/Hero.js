import './Hero.scss'
import {gsap} from "gsap"
import React, {useRef, useEffect} from "react"
import ScrollCTA from '../ScrollCTA/ScrollCTA'
import BG from '../../../images/laanding-2.jpeg'
import imagesLoaded from "imagesloaded";
import MouseFollower from 'mouse-follower'

MouseFollower.registerGSAP(gsap)
const cursor = new MouseFollower();

// Preloading Images, unused rn
const preloadImages = (selector) => {
    return new Promise((resolve) => {
        imagesLoaded(
            document.querySelector(selector),
            {background:true},
            resolve()
        )
    })
}
// Getting Page Height
function getSectionHeight(element) {
    if(!element) return 0;
    const { height } = element.getBoundingClientRect();
    const childElementCount = element.childNodes.length;
    return height / childElementCount;
}
export default function Hero() {
    // Loading Screen
    const loaderRef = useRef(null)

    //Opening animation
    const backgroundWrapper = useRef(null);
    const topSpans = [useRef(null), useRef(null), useRef(null)];
    const headings = [useRef(null), useRef(null), useRef(null)];
    const backgroundImage = useRef(null)

    useEffect(() => {
        
        const animate = () => {
            //background
            gsap.fromTo(backgroundWrapper.current, {
                y: '100vh',
                scale: 1.3,
                rotation: 10,
                ease: 'power4.easeOut'
            },{
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 1.1,
                ease: 'power4.easeOut',
                delay: .59,
            });

            //top spans
            topSpans.forEach((span, i) => {
                gsap.fromTo(span.current,
                    {rotation: 10, opacity: 0, y: () => window.innerHeight * -.4},
                    {rotation: 0, y: 0, opacity: 1, duration: 1.4, ease: 'power4.easeOut', delay: 2 + (i / 20)}
                )
            })
            //headings
            headings.forEach((heading, i) => {
                gsap.fromTo(heading.current,
                    {rotation: 10, opacity: 0, y: () => window.innerHeight * .5},
                    {rotation: 0, y: 0, opacity: 1, duration: 1.3, ease: 'power4.easeOut', delay: 1.7 + (i / 10)}
                )
            })
            // Scroll Animation
            gsap.to(backgroundImage.current, {
                y: () => window.innerHeight * 2,
                opacity: .3,
                scale: 1.4,
                scrollTrigger: {
                    start: 'top',
                    end: 'bottom',
                    scrub: true,
                },
            })
        }
        setTimeout(() => requestAnimationFrame(animate), 2000)
    }, [])

    return (
			<section
				id='hero-container'
				onMouseMove={() =>
					window.cursorIcon ? window.cursorIcon.show('Scroll') : null
				}
				onMouseLeave={() =>
					window.cursorIcon ? window.cursorIcon.hide() : null
				}>
				<ScrollCTA />
				{/*<Navbar />*/}
				<div data-cursor='-difference' className='content-width column'>
					<div
						className='hero-background loading-transition'
						ref={backgroundWrapper}>
						<img src={BG} alt='Background hero' ref={backgroundImage} />
					</div>
					<div data-cursor-text='Hey!' className='top-span-container'>
						<div className='anim'>
							<span ref={topSpans[0]}>charmed by tech</span>
						</div>
						<div className='anim'>
							<span ref={topSpans[1]}>and entertained by creativity.</span>
						</div>
						<div className='anim'>
							<span ref={topSpans[2]}>
								???Man is still the most extraordinary computer of all.???
							</span>
						</div>
					</div>
					<h1>
						<div className='hero-title-anim'>
							<p ref={headings[0]}>Art</p>
						</div>
						<div className='hero-title-anim'>
							<p ref={headings[1]}>In</p>
						</div>
						<div className='hero-title-anim'>
							<p ref={headings[2]}>Motion</p>
						</div>
					</h1>
					<span
						className='bottom-span'>
						<h3 className={'my-name'}>jake pearson</h3>
						engineer / motion designer
					</span>
				</div>
			</section>
		);
}