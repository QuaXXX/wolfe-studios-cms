import siteSettings from './siteSettings'
import hero from './hero'
import step from './step'
import feature from './feature'
import differentiator from './differentiator'
import example from './example'
import testimonial from './testimonial'
import footer from './footer'

export const schemaTypes = [
    // Singleton documents (only one instance)
    siteSettings,
    hero,
    footer,
    // Collection documents (multiple instances)
    step,
    feature,
    differentiator,
    example,
    testimonial,
]
