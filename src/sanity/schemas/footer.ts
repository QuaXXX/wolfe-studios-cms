import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    liveEdit: true,
    fields: [
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            description: '💡 Example: "© 2026 Wolfe Studios. All rights reserved."',
        }),
        defineField({
            name: 'contactPrompt',
            title: 'Contact Prompt',
            type: 'string',
            description: '💡 Text before your email. Example: "Questions?"',
        }),
        defineField({
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
            description: '💡 Your email address for inquiries',
            validation: (Rule) => Rule.email(),
        }),
    ],
    preview: {
        prepare() {
            return { title: '📝 Footer' }
        },
    },
})
