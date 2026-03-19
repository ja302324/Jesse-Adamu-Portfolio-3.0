import "../css/contact.css"

function ContactIcon({ type }) {
    const icons = {
        email: (
            <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5zm2.2-.5 5.8 5 5.8-5zm11.8 1.33-5.35 4.6a1 1 0 0 1-1.3 0L6 7.33V17.5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5z" />
        ),
        linkedin: (
            <path d="M7.1 9.4V20H4.2V9.4zm-1.45-1.3A1.7 1.7 0 1 1 5.7 4.7a1.7 1.7 0 0 1-.05 3.4M20 13.5V20h-2.9v-6.1c0-1.53-.54-2.57-1.9-2.57-1.04 0-1.66.7-1.93 1.38-.1.25-.12.59-.12.94V20h-2.9s.04-9.77 0-10.78h2.9v1.53c.39-.6 1.08-1.45 2.64-1.45 1.93 0 3.3 1.26 3.3 4.2" />
        ),
        github: (
            <path d="M12 3.5a8.5 8.5 0 0 0-2.69 16.56c.43.08.58-.18.58-.41v-1.43c-2.35.51-2.85-1-2.85-1-.38-.96-.93-1.21-.93-1.21-.76-.52.06-.51.06-.51.84.06 1.29.87 1.29.87.75 1.27 1.96.9 2.44.69.08-.54.29-.9.53-1.1-1.88-.21-3.86-.94-3.86-4.2 0-.93.33-1.69.87-2.29-.09-.22-.38-1.08.08-2.25 0 0 .71-.23 2.33.88a8 8 0 0 1 4.24 0c1.62-1.11 2.33-.88 2.33-.88.46 1.17.17 2.03.08 2.25.54.6.87 1.36.87 2.29 0 3.27-1.99 3.99-3.89 4.2.31.26.58.77.58 1.56v2.31c0 .23.15.49.59.41A8.5 8.5 0 0 0 12 3.5" />
        ),
        instagram: (
            <path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4m0 2A2 2 0 0 0 6 8v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm8.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        ),
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            {icons[type]}
        </svg>
    )
}

function ContactCard({ icon, title, subtitle, href, action, external = true }) {
    return (
        <article className="contact-card">
            <div className="contact-card-icon">
                <ContactIcon type={icon} />
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <a
                className="contact-card-link"
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
            >
                {action}
            </a>
        </article>
    )
}

export default function Contact() {
    const items = [
        {
            icon: "email",
            title: "Email",
            subtitle: "Send me a message directly.",
            href: "mailto:jesseadamu2021@gmail.com",
            action: "jesseadamu2021@gmail.com",
            external: false,
        },
        {
            icon: "linkedin",
            title: "LinkedIn",
            subtitle: "Connect with me professionally.",
            href: "https://www.linkedin.com/in/jesseadamu2/",
            action: "Open LinkedIn",
        },
        {
            icon: "github",
            title: "GitHub",
            subtitle: "See my code and projects.",
            href: "https://github.com/ja302324",
            action: "View GitHub",
        },
        {
            icon: "instagram",
            title: "Instagram",
            subtitle: "Follow my visual updates.",
            href: "https://www.instagram.com/jesse.adamu/",
            action: "Open Instagram",
        },
    ]

    return (
        <section id="contact-section">
            <div className="contact-shell">
                <div className="contact-head">
                    <span className="contact-badge">Contact</span>
                    <h2>Let's Connect</h2>
                    <p>
                        Reach out through any of the platforms below. I am open to collaborations, design work, and creative conversations.
                    </p>
                </div>

                <div className="contact-grid">
                    {items.map(item => (
                        <ContactCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
