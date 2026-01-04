type Feature = {
    text: string
}

type FeaturesProps = {
    sectionTitle?: string
    features?: Feature[]
}

// Default features when CMS hasn't been populated
const defaultFeatures: Feature[] = [
    { text: 'Custom mobile-first design' },
    { text: 'Fast-loading pages' },
    { text: 'Contact form that works' },
    { text: 'SEO basics done right' },
    { text: 'Ownership of all files' },
]

// Checkmark icon SVG
function CheckIcon() {
    return (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    )
}

export function Features({ sectionTitle, features }: FeaturesProps) {
    const displayFeatures = features && features.length > 0 ? features : defaultFeatures

    return (
        <section className="section section-alt" id="whats-included">
            <div className="container">
                <h2 className="section-title">{sectionTitle || "Everything you need. Nothing you don't."}</h2>
                <ul className="features-list">
                    {displayFeatures.map((feature, index) => (
                        <li key={index} className="feature-item">
                            <CheckIcon />
                            <span>{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
