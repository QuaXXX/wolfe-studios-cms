import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Website Settings',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'sections', title: 'Section Titles' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        // Header
        defineField({
            name: 'siteName',
            title: 'Website Name',
            type: 'string',
            group: 'header',
            description: '💡 Your business name (shows in the top-left corner)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'headerCta',
            title: 'Header Button Text',
            type: 'string',
            group: 'header',
            description: '💡 The button in the top-right corner. Example: "Get a Free Mockup"',
        }),

        // Section Titles
        defineField({
            name: 'sectionTitles',
            title: 'Section Headings',
            type: 'object',
            group: 'sections',
            description: '💡 Change the main heading for each section of your website',
            fields: [
                {
                    name: 'howItWorks',
                    title: '"How It Works" Heading',
                    type: 'string',
                    description: 'Currently: "Three steps to a site you\'re proud of"'
                },
                {
                    name: 'whatsIncluded',
                    title: '"Features" Heading',
                    type: 'string',
                    description: 'Currently: "Everything you need. Nothing you don\'t."'
                },
                {
                    name: 'whyUs',
                    title: '"Why Choose Us" Heading',
                    type: 'string',
                    description: 'Currently: "Straightforward redesigns for busy business owners"'
                },
                {
                    name: 'examples',
                    title: '"Examples" Heading',
                    type: 'string'
                },
                {
                    name: 'examplesSubtitle',
                    title: '"Examples" Subtitle',
                    type: 'string'
                },
                {
                    name: 'contact',
                    title: '"Contact" Heading',
                    type: 'string'
                },
                {
                    name: 'contactSubtitle',
                    title: '"Contact" Subtitle',
                    type: 'string'
                },
            ],
        }),

        // SEO
        defineField({
            name: 'siteDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 2,
            group: 'seo',
            description: '💡 This appears in Google search results. 1-2 sentences about your business.',
        }),
    ],
    preview: {
        prepare() {
            return { title: '⚙️ Website Settings' }
        },
    },
})
