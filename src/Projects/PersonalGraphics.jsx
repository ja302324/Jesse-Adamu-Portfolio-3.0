import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import "../css/SportGraphics.css"
import { projects } from "../data/personalGraphics"

const categories = [
    { id: "all",              label: "All" },
    { id: "birthday-graphic", label: "Birthday Graphic" },
    { id: "event-graphic",    label: "Event Graphic" },
]

function CarouselCard({ project }) {
    const [index, setIndex] = useState(0)
    const total = project.images.length

    const prev = (e) => {
        e.stopPropagation()
        setIndex(i => (i - 1 + total) % total)
    }
    const next = (e) => {
        e.stopPropagation()
        setIndex(i => (i + 1) % total)
    }

    return (
        <div className="sg-card sg-card--carousel">
            <img src={project.images[index]} alt={`${project.title} ${index + 1}`} />
            <div className="sg-card-overlay" />
            <button className="sg-carousel-btn sg-carousel-btn--prev" onClick={prev} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className="sg-carousel-btn sg-carousel-btn--next" onClick={next} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className="sg-carousel-dots">
                {project.images.map((_, i) => (
                    <button
                        key={i}
                        className={`sg-carousel-dot ${i === index ? "sg-carousel-dot--active" : ""}`}
                        onClick={(e) => { e.stopPropagation(); setIndex(i) }}
                        aria-label={`Go to image ${i + 1}`}
                    />
                ))}
            </div>
            <div className="sg-card-meta">
                <span className="sg-card-title">{project.title}</span>
                <span className="sg-card-year">{project.year}</span>
            </div>
        </div>
    )
}

export default function PersonalGraphics() {
    const [active, setActive] = useState("all")
    const [indicator, setIndicator] = useState({ width: 0, left: 0 })
    const btnRefs = useRef([])

    useEffect(() => {
        const activeIndex = categories.findIndex(c => c.id === active)
        const btn = btnRefs.current[activeIndex]
        if (btn) {
            setIndicator({ width: btn.offsetWidth, left: btn.offsetLeft })
        }
    }, [active])

    const filtered = active === "all"
        ? projects
        : projects.filter(p => p.category === active)

    return (
        <div className="sg-page">
            <div
                className="sg-hero"
                style={{ backgroundImage: "url('/images/personal-graphics/birthday-graphic/sammy-birthday-design.jpg')" }}
            >
                <div className="sg-hero-overlay" />

                <Link to="/" className="sg-back">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </Link>

                <div className="sg-hero-content">
                    <span className="sg-badge">Projects</span>
                    <h1>Personal Graphics</h1>
                </div>

                <div className="sg-filter-wrap">
                    <div className="sg-filter">
                        <div
                            className="sg-filter-indicator"
                            style={{
                                width: indicator.width,
                                transform: `translateX(${indicator.left}px)`,
                            }}
                        />
                        {categories.map((cat, i) => (
                            <button
                                key={cat.id}
                                ref={el => { btnRefs.current[i] = el }}
                                className={`sg-filter-btn ${active === cat.id ? "sg-filter-btn--active" : ""}`}
                                onClick={() => setActive(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="sg-grid">
                {filtered.map(project => (
                    project.carousel
                        ? <CarouselCard key={project.id} project={project} />
                        : (
                            <div key={project.id} className="sg-card">
                                <img src={project.image} alt={project.title} />
                                <div className="sg-card-overlay" />
                                <div className="sg-card-meta">
                                    <span className="sg-card-title">{project.title}</span>
                                    <span className="sg-card-year">{project.year}</span>
                                </div>
                            </div>
                        )
                ))}
            </div>
        </div>
    )
}
