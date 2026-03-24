"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const MotionLink = motion(Link)
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
        <MotionLink
            to={item.href}
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
        </MotionLink>
    )
}

function getCardDims() {
    const w = window.innerWidth
    if (w <= 480)  return { cardWidth: Math.min(w * 0.72, 260), gap: 14 }
    if (w <= 768)  return { cardWidth: 240, gap: 16 }
    if (w <= 1080) return { cardWidth: 260, gap: 20 }
    return { cardWidth: 280, gap: 24 }
}

export default function Work() {
    const containerRef = useRef(null)
    const [dims, setDims] = useState(getCardDims)

    useEffect(() => {
        const handler = () => setDims(getCardDims())
        window.addEventListener("resize", handler)
        return () => window.removeEventListener("resize", handler)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const items = [
        { id: 1, title: "Sport Graphics",    tag: "2026", image: PromiseDesign,  href: "/projects/sport-graphics" },
        { id: 2, title: "Personal Graphics", tag: "2026", image: SammyBirthday,  href: "/projects/personal-graphics" },
        { id: 3, title: "Brand Design",      tag: "2026", image: NXTGENlogo,     href: "/projects/brand-design" },
    ]

    const totalDistance = (items.length - 1) * (dims.cardWidth + dims.gap)
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
                        <motion.div className="hs-track" style={{ x }}>
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
