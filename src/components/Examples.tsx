import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Example = {
    title: string
    beforeImage?: {
        asset: {
            _ref: string
        }
    }
    beforeLabel?: string
    afterImage?: {
        asset: {
            _ref: string
        }
    }
    afterLabel?: string
}

type ExamplesProps = {
    sectionTitle?: string
    sectionSubtitle?: string
    examples?: Example[]
}

export function Examples({ sectionTitle, sectionSubtitle, examples }: ExamplesProps) {
    // If no examples from CMS, show placeholder structure
    const hasExamples = examples && examples.length > 0

    return (
        <section className="section section-examples" id="examples">
            <div className="container">
                <h2 className="section-title">{sectionTitle || 'What a redesign looks like'}</h2>
                <p className="section-subtitle">{sectionSubtitle || 'Conceptual before and after example'}</p>
                <div className="examples-grid">
                    {hasExamples ? (
                        examples.map((example, index) => (
                            <div key={index} className="example-card">
                                <div className="example-before">
                                    <span className="example-label">{example.beforeLabel || 'Before'}</span>
                                    {example.beforeImage && (
                                        <Image
                                            src={urlFor(example.beforeImage).width(600).url()}
                                            alt={`${example.title} - Before redesign`}
                                            width={600}
                                            height={400}
                                            className="example-image"
                                        />
                                    )}
                                </div>
                                <div className="example-after">
                                    <span className="example-label">{example.afterLabel || 'After'}</span>
                                    {example.afterImage && (
                                        <Image
                                            src={urlFor(example.afterImage).width(600).url()}
                                            alt={`${example.title} - After redesign`}
                                            width={600}
                                            height={400}
                                            className="example-image"
                                        />
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="example-card">
                            <div className="example-before">
                                <span className="example-label">Before</span>
                                <Image
                                    src="/images/before-lynco.png"
                                    alt="Outdated website design - cluttered, dated layout"
                                    width={600}
                                    height={400}
                                    className="example-image"
                                />
                            </div>
                            <div className="example-after">
                                <span className="example-label">After</span>
                                <Image
                                    src="/images/after-lynco.png"
                                    alt="Modern redesigned website - clean, professional layout"
                                    width={600}
                                    height={400}
                                    className="example-image"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
