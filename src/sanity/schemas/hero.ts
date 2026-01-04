import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Homepage Hero',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Big Headline',
            type: 'string',
            description: '💡 This is the main text visitors see first. Keep it short and punchy!',
            validation: (Rule) => Rule.required().max(100).warning('Keep it under 100 characters for best results'),
        }),
        defineField({
            name: 'subtitle',
            title: 'Supporting Text',
            type: 'text',
            rows: 2,
            description: '💡 Appears below the headline. Explain what you do in 1-2 sentences.',
            validation: (Rule) => Rule.required().max(200),
        }),
        defineField({
            name: 'ctaText',
            title: 'Button Text',
            type: 'string',
            description: '💡 What should the button say? Example: "See How It Works" or "Get Started"',
            validation: (Rule) => Rule.required().max(30),
        }),
        defineField({
            name: 'ctaLink',
            title: 'Button Link',
            type: 'string',
            description: '💡 Where does the button go? Use #contact to scroll to contact form, or a full URL',
            initialValue: '#how-it-works',
        }),
    ],
    preview: {
        prepare() {
            return { title: '🏠 Homepage Hero' }
        },
    },
})
