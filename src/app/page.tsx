import { client } from '@/sanity/lib/client'
import { pageDataQuery } from '@/sanity/lib/queries'
import {
  Header,
  Hero,
  HowItWorks,
  Features,
  WhyUs,
  Examples,
  Testimonials,
  Contact,
  Footer,
} from '@/components'
import { ClientScripts } from './ClientScripts'

// ISR: Revalidate every 60 seconds
export const revalidate = 60

// Type definitions for CMS data
type PageData = {
  siteSettings: {
    siteName?: string
    siteDescription?: string
    headerCta?: string
    sectionTitles?: {
      howItWorks?: string
      whatsIncluded?: string
      whyUs?: string
      examples?: string
      examplesSubtitle?: string
      contact?: string
      contactSubtitle?: string
    }
  } | null
  hero: {
    title?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
  } | null
  steps: Array<{
    stepNumber: number
    title: string
    description: string
  }>
  features: Array<{ text: string }>
  differentiators: Array<{ title: string; description: string }>
  examples: Array<{
    title: string
    beforeImage?: { asset: { _ref: string } }
    beforeLabel?: string
    afterImage?: { asset: { _ref: string } }
    afterLabel?: string
  }>
  testimonials: Array<{
    quote: string
    authorName: string
    authorRole?: string
    authorImage?: { asset: { _ref: string } }
  }>
  footer: {
    copyrightText?: string
    contactPrompt?: string
    contactEmail?: string
  } | null
}

async function getPageData(): Promise<PageData> {
  return client.fetch(pageDataQuery)
}

export default async function Home() {
  const data = await getPageData()

  return (
    <>
      <Header
        siteName={data.siteSettings?.siteName}
        headerCta={data.siteSettings?.headerCta}
      />
      <main>
        <Hero
          title={data.hero?.title}
          subtitle={data.hero?.subtitle}
          ctaText={data.hero?.ctaText}
          ctaLink={data.hero?.ctaLink}
        />
        <HowItWorks
          sectionTitle={data.siteSettings?.sectionTitles?.howItWorks}
          steps={data.steps}
        />
        <Features
          sectionTitle={data.siteSettings?.sectionTitles?.whatsIncluded}
          features={data.features}
        />
        <WhyUs
          sectionTitle={data.siteSettings?.sectionTitles?.whyUs}
          differentiators={data.differentiators}
        />
        <Examples
          sectionTitle={data.siteSettings?.sectionTitles?.examples}
          sectionSubtitle={data.siteSettings?.sectionTitles?.examplesSubtitle}
          examples={data.examples}
        />
        <Testimonials testimonials={data.testimonials} />
        <Contact
          sectionTitle={data.siteSettings?.sectionTitles?.contact}
          sectionSubtitle={data.siteSettings?.sectionTitles?.contactSubtitle}
        />
      </main>
      <Footer
        copyrightText={data.footer?.copyrightText}
        contactPrompt={data.footer?.contactPrompt}
        contactEmail={data.footer?.contactEmail}
      />
      <ClientScripts />
    </>
  )
}
