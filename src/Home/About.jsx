import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import "../css/about.css"
import FrontPortrait from "../assets/Images/About/jesseimg.jpeg"

export default function About() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    // Moves image up/down as this section scrolls through viewport
    const imageY = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"])
    const imageScale = 1.3

    return (
        <section id="about-section" ref={sectionRef}>
            <div className="about-head">
                <span className="about-badge">About</span>
                <h2>Jesse Adamu</h2>
            </div>

            <div className="about-divider" />

            <div className="about-grid">
                <figure className="about-media">
                    <div className="about-media-viewport">
                        <motion.img
                            className="about-media-img"
                            src={FrontPortrait}
                            alt="Founder portrait"
                            style={{ y: imageY, scale: imageScale }}
                        />
                    </div>
                </figure>

                <article className="about-copy">
                    <p>
                        I’m a graphic designer and visual storyteller creating cinematic, intentional design across branding, sports graphics, and digital experiences — blending creativity with strategy to build work that feels powerful and purposeful.
                    </p>
                </article>
            </div>
        </section>
    )
}
