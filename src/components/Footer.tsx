type FooterProps = {
    copyrightText?: string
    contactPrompt?: string
    contactEmail?: string
}

export function Footer({ copyrightText, contactPrompt, contactEmail }: FooterProps) {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">{copyrightText || '© 2026 Wolfe Studios. All rights reserved.'}</p>
                <p className="footer-contact">
                    {contactPrompt || 'Questions?'}{' '}
                    <a href={`mailto:${contactEmail || 'hello@wolfestudios.co'}`}>{contactEmail || 'hello@wolfestudios.co'}</a>
                </p>
            </div>
        </footer>
    )
}
