import { Link } from "react-router-dom"
import "../css/ComingSoon.css"

export default function BrandDesign() {
    return (
        <div className="cs-page">
            <Link to="/" className="cs-back">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
            </Link>

            <div className="cs-content">
                <div className="cs-loader">
                    <span /><span /><span />
                </div>
                <span className="cs-badge">Brand Design</span>
                <h1 className="cs-title">Coming Soon</h1>
                <p className="cs-sub">This project page is currently being built. Check back soon.</p>
            </div>
        </div>
    )
}
