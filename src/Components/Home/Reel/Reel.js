import './Reel.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef, useEffect, useState } from "react"
import VideoPlayer from './VideoPlayer'
import bgVid from '../../../vids/payhipUwU.mp4'
import CursorIcon from "../../CursorIcon/CursorIcon";
gsap.registerPlugin(ScrollTrigger)


function HomeReel() {

    const [isPlaying, setIsPlaying] = useState(false)

    const video = useRef(null)
    const container = useRef(null)
    const heading0 = useRef(null)
    const heading1 = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                scrub: .99,
                onEnter: () => video.current.play(),
                pinSpacing: true,
                pin: true,
            },
        })
        // Scale Video to fill container
        timeline.to(video.current, { scale: 1, }, 0)

        // Headings
        timeline.to(heading0.current, { x: 0, }, 0)
        timeline.to(heading1.current, { x: 0, }, 0)
    }, [])

    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }

    const handleScroll = () => {
        if (isPlaying) setIsPlaying(false)
    }

    return (
        <div id="reel-wrapper">
            <div id="reel-container" className="center column" ref={container} onClick={handleClick} onWheel={handleScroll}>
                <div className="row center" id="reel-top-p">
                    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className="icon" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <p>who is Jake?</p>
                </div>
                <div className="row center">
                    <h2 ref={heading0}>Support</h2>
                    <video playsInline="" loop="loop" muted="muted" disablePictureInPicture="" ref={video} className="video">
                        <source src={bgVid} type="video/mp4" />
                    </video>
                    <h2 ref={heading1}>My Work</h2>
                </div>
                <p id="reel-bottom-p">Payhip is where I keep source code<br />along with other digital assets :P</p>
            </div>
            {isPlaying ? <VideoPlayer handleClick={handleClick} handleScroll={handleScroll} /> : null}
        </div>
    )
}

export default HomeReel