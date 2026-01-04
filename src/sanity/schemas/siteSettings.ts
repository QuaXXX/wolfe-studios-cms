import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
            description: 'Appears in the header and browser tab',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
            rows: 2,
            description: 'Used for SEO meta description',
        }),
        defineField({
            name: 'headerCta',
            title: 'Header Button Text',
            type: 'string',
            description: 'Text for the button in the header (e.g., "Get a Free Mockup")',
        }),
        defineField({
            name: 'sectionTitles',
            title: 'Section Titles',
            type: 'object',
            description: 'Edit the main heading for each section',
            fields: [
                { name: 'howItWorks', title: 'How It Works Section', type: 'string' },
                { name: 'whatsIncluded', title: "What's Included Section", type: 'string' },
                { name: 'whyUs', title: 'Why Us Section', type: 'string' },
                { name: 'examples', title: 'Examples Section', type: 'string' },
                { name: 'examplesSubtitle', title: 'Examples Subtitle', type: 'string' },
                { name: 'contact', title: 'Contact Section', type: 'string' },
                { name: 'contactSubtitle', title: 'Contact Subtitle', type: 'string' },
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Site Settings' }
        },
    },
})
