import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Testimonial = {
    quote: string
    authorName: string
    authorRole?: string
    authorImage?: {
        asset: {
            _ref: string
        }
    }
}

type TestimonialsProps = {
    testimonials?: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
    // If no testimonials, don't render the section
    if (!testimonials || testimonials.length === 0) {
        return null
    }

    return (
        <section className="section section-testimonials" id="testimonials">
            <div className="container">
                <h2 className="section-title">What our clients say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <blockquote className="testimonial-quote">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>
                            <div className="testimonial-author">
                                {testimonial.authorImage && (
                                    <Image
                                        src={urlFor(testimonial.authorImage).width(60).height(60).url()}
                                        alt={testimonial.authorName}
                                        width={60}
                                        height={60}
                                        className="testimonial-avatar"
                                    />
                                )}
                                <div className="testimonial-author-info">
                                    <span className="testimonial-author-name">{testimonial.authorName}</span>
                                    {testimonial.authorRole && (
                                        <span className="testimonial-author-role">{testimonial.authorRole}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
