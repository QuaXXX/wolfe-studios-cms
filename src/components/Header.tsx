import Link from 'next/link'

type HeaderProps = {
    siteName?: string
    headerCta?: string
}

export function Header({ siteName, headerCta }: HeaderProps) {
    return (
        <header className="header">
            <div className="container header-inner">
                <Link href="/" className="logo">{siteName || 'Wolfe Studios'}</Link>
                <a href="#contact" className="btn btn-primary">{headerCta || 'Get a Free Mockup'}</a>
            </div>
        </header>
    )
}
