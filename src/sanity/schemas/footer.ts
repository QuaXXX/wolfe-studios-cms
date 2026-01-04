import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            description: 'e.g., "© 2026 Wolfe Studios. All rights reserved."',
        }),
        defineField({
            name: 'contactPrompt',
            title: 'Contact Prompt',
            type: 'string',
            description: 'Text before the email (e.g., "Questions?")',
        }),
        defineField({
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
            description: 'Email address to display',
            validation: (Rule) => Rule.email(),
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Footer' }
        },
    },
})
