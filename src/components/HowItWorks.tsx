type Step = {
    stepNumber: number
    title: string
    description: string
}

type HowItWorksProps = {
    sectionTitle?: string
    steps?: Step[]
}

// Default content for when CMS hasn't been populated
const defaultSteps: Step[] = [
    { stepNumber: 1, title: 'Share Your Current Site', description: "Send us your URL and tell us what's not working." },
    { stepNumber: 2, title: 'Get a Free Mockup', description: "We'll redesign your homepage so you can see the difference." },
    { stepNumber: 3, title: 'Launch Your New Site', description: "Approve the design, and we'll build and launch it for you." },
]

export function HowItWorks({ sectionTitle, steps }: HowItWorksProps) {
    const displaySteps = steps && steps.length > 0 ? steps : defaultSteps

    return (
        <section className="section" id="how-it-works">
            <div className="container">
                <h2 className="section-title">{sectionTitle || "Three steps to a site you're proud of"}</h2>
                <div className="steps-grid">
                    {displaySteps.map((step) => (
                        <div key={step.stepNumber} className="step">
                            <span className="step-number">{step.stepNumber}</span>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
