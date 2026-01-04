import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Main Headline',
            type: 'string',
            description: 'The big headline at the top of the page',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            rows: 2,
            description: 'Supporting text below the headline',
            validation: (Rule) => Rule.required().max(200),
        }),
        defineField({
            name: 'ctaText',
            title: 'Button Text',
            type: 'string',
            description: 'Text for the call-to-action button',
            validation: (Rule) => Rule.required().max(30),
        }),
        defineField({
            name: 'ctaLink',
            title: 'Button Link',
            type: 'string',
            description: 'Where the button links to (e.g., #how-it-works)',
            initialValue: '#how-it-works',
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Hero Section' }
        },
    },
})
