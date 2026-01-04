type Differentiator = {
    title: string
    description: string
}

type WhyUsProps = {
    sectionTitle?: string
    differentiators?: Differentiator[]
}

// Default content when CMS hasn't been populated
const defaultDifferentiators: Differentiator[] = [
    { title: 'One person. Direct communication.', description: "No account managers or handoffs. You work directly with the person building your site." },
    { title: 'Fixed pricing. No surprises.', description: 'Know the full cost before you commit. No hidden fees or scope creep charges.' },
    { title: 'Fast turnaround.', description: "Most projects launch in under a week. You're not waiting months for a website." },
    { title: 'You own everything.', description: 'Your site, your files, your domain. No lock-in or proprietary systems.' },
]

export function WhyUs({ sectionTitle, differentiators }: WhyUsProps) {
    const displayItems = differentiators && differentiators.length > 0 ? differentiators : defaultDifferentiators

    return (
        <section className="section" id="why-us">
            <div className="container">
                <h2 className="section-title">{sectionTitle || 'Straightforward redesigns for busy business owners'}</h2>
                <div className="differentiators-grid">
                    {displayItems.map((item, index) => (
                        <div key={index} className="differentiator">
                            <h3 className="differentiator-title">{item.title}</h3>
                            <p className="differentiator-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
