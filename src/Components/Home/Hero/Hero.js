import './Hero.css'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRef, useEffect} from "react"
import ScrollCTA from '../ScrollCTA/ScrollCTA'
import BG from '../../../imgs/laanding-2.jpeg'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    //Opening animation
    const backgroundWrapper = useRef(null);
    const topSpans = [useRef(null), useRef(null), useRef(null)];
    const headings = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const animate = () => {
            //background
            backgroundWrapper.current.style.transform = 'translateY(0)';

            //top spans
            topSpans.forEach((span, i) => {
                gsap.fromTo(span.current,
                    {rotation: 10, opacity: 0, y: () => window.innerHeight * .5},
                    {rotation: 0, y: 0, opacity: 1, duration: 1, ease: 'power4.easeOut', delay: .6 + (i / 20)}
                )
            })

            //headings
            headings.forEach((heading, i) => {
                gsap.fromTo(heading.current,
                    {rotation: 10, opacity: 0, y: () => window.innerHeight * .5},
                    {rotation: 0, y: 0, opacity: 1, duration: 1, ease: 'power4.easeOut', delay: .8 + (i / 10)}
                )
            })
        }
        setTimeout(() => requestAnimationFrame(animate), 2300)
    }, [])


    //Scroll Parallax
    const backgroundImage = useRef(null)
    useEffect(() => {
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
    }, [])

    return (
        <div
            id='hero-container'
            onMouseMove={() =>
                window.cursorIcon ? window.cursorIcon.show('Scroll') : null
            }
            onMouseLeave={() =>
                window.cursorIcon ? window.cursorIcon.hide() : null
            }>
            <ScrollCTA/>
            <div className='content-width column'>
                <div
                    className='hero-background loading-transition'
                    ref={backgroundWrapper}>
                    <img src={BG} alt='Background hero' ref={backgroundImage}/>
                </div>
                <div className='top-span-container'>
                    <div className='anim'>
                        <span ref={topSpans[0]}>charmed by tech</span>
                    </div>
                    <div className='anim'>
                        <span ref={topSpans[1]}>and entertained by creativity.</span>
                    </div>
                    <div className='anim'>
							<span ref={topSpans[2]}>
								“Man is still the most extraordinary computer of all.”
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
                <span className='bottom-span'>
						engineer / motion designer
					</span>
            </div>
        </div>
    );
}