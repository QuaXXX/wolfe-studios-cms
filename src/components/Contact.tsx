type ContactProps = {
    sectionTitle?: string
    sectionSubtitle?: string
}

export function Contact({ sectionTitle, sectionSubtitle }: ContactProps) {
    return (
        <section className="section section-contact" id="contact">
            <div className="container">
                <div className="contact-content">
                    <h2 className="section-title">{sectionTitle || 'Ready to modernize your website?'}</h2>
                    <p className="section-subtitle">{sectionSubtitle || "Tell us about your business and we'll send a free homepage mockup."}</p>
                    <form className="contact-form" id="contact-form" action="https://formsubmit.co/ajax/hello@wolfestudios.co" method="POST">
                        {/* Formsubmit config */}
                        <input type="hidden" name="_subject" value="New Mockup Request from Wolfe Studios" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" id="name" name="name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" id="email" name="email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="website" className="form-label">Current Website URL</label>
                            <input type="url" id="website" name="website" className="form-input" placeholder="https://yoursite.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">What&apos;s not working with your current site?</label>
                            <textarea id="message" name="message" className="form-input form-textarea" rows={4}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full" id="submit-btn">Get Your Free Mockup</button>
                    </form>

                    {/* Success message - controlled by client-side JS */}
                    <div className="form-success" id="form-success" style={{ display: 'none' }}>
                        <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h3 className="success-title">Message sent!</h3>
                        <p className="success-text">We&apos;ll review your site and get back to you within 24 hours with a free mockup.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
