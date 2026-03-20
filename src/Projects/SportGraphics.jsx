import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import "../css/SportGraphics.css"

import RenaCoachOfTourney from "../assets/Images/Hero/RenaCoachOfTourney.jpg"
import JoshIsBack from "../assets/Images/Hero/JoshIsBack.jpg"
import Front from "../assets/Images/Hero/Front.jpg"
import Artboard1 from "../assets/Images/Hero/Artboard1.jpg"
import PromiseCanvas from "../assets/Images/Hero/PromiseCanvas.jpg"
import Independance65 from "../assets/Images/Hero/Independance65.jpg"
import PromiseDesign from "../assets/Images/Portfolio/PromiseDesign.jpg"
import SammyBirthday from "../assets/Images/Portfolio/SammyBirthday.jpg"

const categories = [
    { id: "all", label: "All" },
    { id: "player-feature", label: "Player Feature" },
    { id: "team-graphic", label: "Team Graphic" },
    { id: "gameday-design", label: "Gameday Design" },
    { id: "championship-art", label: "Championship Art" },
]

const projects = [
    { id: 1, title: "Josh Is Back", year: "2025", category: "player-feature", image: JoshIsBack },
    { id: 2, title: "Front", year: "2025", category: "player-feature", image: Front },
    { id: 3, title: "Rena – Coach of Tourney", year: "2025", category: "team-graphic", image: RenaCoachOfTourney },
    { id: 4, title: "Artboard Series", year: "2025", category: "team-graphic", image: Artboard1 },
    { id: 5, title: "Promise Canvas", year: "2025", category: "gameday-design", image: PromiseCanvas },
    { id: 6, title: "Promise Design", year: "2025", category: "gameday-design", image: PromiseDesign },
    { id: 7, title: "Independence 65", year: "2025", category: "championship-art", image: Independance65 },
    { id: 8, title: "Sammy Birthday", year: "2025", category: "championship-art", image: SammyBirthday },
]

export default function SportGraphics() {
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
            <div className="sg-hero">
                <div className="sg-hero-overlay" />

                <Link to="/" className="sg-back">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </Link>

                <div className="sg-hero-content">
                    <span className="sg-badge">Projects</span>
                    <h1>Sport Graphics</h1>
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
                    <div key={project.id} className="sg-card">
                        <img src={project.image} alt={project.title} />
                        <div className="sg-card-overlay" />
                        <div className="sg-card-meta">
                            <span className="sg-card-title">{project.title}</span>
                            <span className="sg-card-year">{project.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
