import './CursorIcon.css'
import { gsap, Power2 } from 'gsap'

export default class CursorIcon {
    
    visible = false
    elements = {
    cursor: document.getElementById('cursor-icon') || document.getElementById('cursor-icon-2'),
}

    constructor() {
        //global access
        window.cursorIcon = this

        this.setupEventListeners()
    }

    setupEventListeners() {
        window.addEventListener('mousemove', (event) => {
            //move using gsap
            gsap.to(this.elements.cursor, {
                x: event.clientX,
                y: event.clientY,
                duration: 1,
                ease: Power2.easeOut
            })
        })
    }

    show(text) {
        if (this.elements === true) {
        this.visible = true

        this.elements.cursor.style.display = 'flex'

        gsap.killTweensOf(this.elements.cursor)

        //Scale up
        gsap.to(this.elements.cursor, { scale: 1, duration: .3 })
        this.elements.cursor.innerHTML = text


				}
        else {
            this.elements.innerHTML = 'Sorry, this cursor is malfunctioning';
        }
    }

    hide() {
        if (this.visible) {
            this.visible = false

            gsap.killTweensOf(this.elements.cursor)

            //Scale down
            gsap.to(this.elements.cursor, {
                scale: 0, duration: .3, onComplete: () => {
                    //hide on complete
                    this.elements.cursor.style.display = 'none'
                }
            })
        }
    }
}