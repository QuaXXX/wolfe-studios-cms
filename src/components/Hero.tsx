type HeroProps = {
    title?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
}

// Default values in case CMS content hasn't been added yet
const defaults = {
    title: 'Your website should work as hard as you do.',
    subtitle: 'We redesign outdated small-business websites into fast, mobile-first sites that actually bring in customers.',
    ctaText: 'See How It Works',
    ctaLink: '#how-it-works',
}

export function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">{title || defaults.title}</h1>
                    <p className="hero-subtitle">{subtitle || defaults.subtitle}</p>
                    <a href={ctaLink || defaults.ctaLink} className="btn btn-secondary">
                        {ctaText || defaults.ctaText}
                    </a>
                </div>
            </div>
        </section>
    )
}
