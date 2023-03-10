import React, { useEffect, useRef } from 'react'
import './VideoPlayer.css'
import gsap from 'gsap'
import payhip from '../../../vids/payhipUwU.mp4'

const VideoPlayer = ({ handleClick, handleScroll }) => {

    const container = useRef(null)

    useEffect(() => {
        gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1 })
    }, [])

    const onClick = () => {
        handleClick()
    }

    const onWheel = () => {
        handleScroll()
    }

    return (
        <div ref={container} onClick={onClick} onWheel={onWheel} className="video-player" >
            <video autoPlay="autoplay">
                <source src={payhip} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer