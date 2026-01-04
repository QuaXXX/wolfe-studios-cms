import { groq } from 'next-sanity'

// Query for site settings (singleton)
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    headerCta,
    sectionTitles
  }
`

// Query for hero section (singleton)
export const heroQuery = groq`
  *[_type == "hero"][0] {
    title,
    subtitle,
    ctaText,
    ctaLink
  }
`

// Query for "How It Works" steps
export const stepsQuery = groq`
  *[_type == "step"] | order(stepNumber asc) {
    stepNumber,
    title,
    description
  }
`

// Query for features list
export const featuresQuery = groq`
  *[_type == "feature"] | order(order asc) {
    text
  }
`

// Query for differentiators (Why Us section)
export const differentiatorsQuery = groq`
  *[_type == "differentiator"] | order(order asc) {
    title,
    description
  }
`

// Query for before/after examples
export const examplesQuery = groq`
  *[_type == "example"] | order(order asc) {
    title,
    beforeImage,
    beforeLabel,
    afterImage,
    afterLabel
  }
`

// Query for testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    quote,
    authorName,
    authorRole,
    authorImage
  }
`

// Query for footer (singleton)
export const footerQuery = groq`
  *[_type == "footer"][0] {
    copyrightText,
    contactPrompt,
    contactEmail
  }
`

// Combined query for single efficient fetch - gets all page data at once
export const pageDataQuery = groq`
{
  "siteSettings": *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    headerCta,
    sectionTitles
  },
  "hero": *[_type == "hero"][0] {
    title,
    subtitle,
    ctaText,
    ctaLink
  },
  "steps": *[_type == "step"] | order(stepNumber asc) {
    stepNumber,
    title,
    description
  },
  "features": *[_type == "feature"] | order(order asc) {
    text
  },
  "differentiators": *[_type == "differentiator"] | order(order asc) {
    title,
    description
  },
  "examples": *[_type == "example"] | order(order asc) {
    title,
    beforeImage,
    beforeLabel,
    afterImage,
    afterLabel
  },
  "testimonials": *[_type == "testimonial"] | order(order asc) {
    quote,
    authorName,
    authorRole,
    authorImage
  },
  "footer": *[_type == "footer"][0] {
    copyrightText,
    contactPrompt,
    contactEmail
  }
}
`
