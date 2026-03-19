"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import "../css/work.css"
import PromiseDesign from "../assets/Images/Portfolio/PromiseDesign.jpg"
import SammyBirthday from "../assets/Images/Portfolio/SammyBirthday.jpg"
import NXTGENlogo from "../assets/Images/Portfolio/NXTGENlogo.jpg"

function WorkCard({ item, index, total, scrollYProgress }) {
    const segment = 1 / total
    const start = index * segment * 0.8
    const peak = start + segment * 0.35

    const opacity = useTransform(scrollYProgress, [start, peak], [0.45, 1])
    const y = useTransform(scrollYProgress, [start, peak], [28, 0])
    const scale = useTransform(scrollYProgress, [start, peak], [0.96, 1])

    return (
        <motion.a
            href={item.href}
            className="hs-card"
            style={{ opacity, y, scale }}
            aria-label={`Open ${item.title}`}
        >
            <img src={item.image} alt={item.title} />
            <div className="hs-card-overlay" />
            <div className="hs-card-meta">
                <span>{item.title}</span>
                <span className="hs-pill">{item.tag}</span>
            </div>
            <span className="hs-card-cta">View Work</span>
        </motion.a>
    )
}

export default function ScrollHorizontal() {
    const containerRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)")
        const onChange = event => setIsMobile(event.matches)

        setIsMobile(mq.matches)
        mq.addEventListener("change", onChange)

        return () => mq.removeEventListener("change", onChange)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const items = [
        { id: 1, title: "Sport Graphics", tag: "2026", image: PromiseDesign, href: "/projects/sport-graphics" },
        { id: 2, title: "Personal Graphics", tag: "2026", image: SammyBirthday, href: "/projects/personal-graphics" },
        { id: 3, title: "Brand Design", tag: "2026", image: NXTGENlogo, href: "/projects/brand-design" },
        { id: 4, title: "Campaign", tag: "2025", image: PromiseDesign, href: "/projects/campaign" },
    ]

    const CARD_WIDTH = 320
    const GAP = 24
    const totalDistance = (items.length - 1) * (CARD_WIDTH + GAP)
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

    return (
        <section id="work-section" ref={containerRef}>
            <div className="hs-sticky">
                <div className="hs-shell">
                    <aside className="hs-left">
                        <span className="hs-badge">Projects</span>
                        <h2>Selected Work</h2>
                        <p>
                            Scroll through a curated set of visual work. Each card links to a full project page.
                        </p>
                    </aside>

                    <div className="hs-right">
                        <motion.div className="hs-track" style={isMobile ? undefined : { x }}>
                            {items.map((item, index) => (
                                <WorkCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    total={items.length}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
