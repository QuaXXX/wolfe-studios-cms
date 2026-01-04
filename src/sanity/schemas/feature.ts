import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'feature',
    title: 'Feature',
    type: 'document',
    liveEdit: true,
    fields: [
        defineField({
            name: 'text',
            title: 'Feature Text',
            type: 'string',
            description: '💡 What\'s included? Example: "Custom mobile-first design"',
            validation: (Rule) => Rule.required().max(60),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: '💡 Which position in the list? (1 = first, 2 = second, etc.)',
            validation: (Rule) => Rule.required(),
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'text',
            order: 'order',
        },
        prepare({ title, order }) {
            return {
                title: `${order}. ${title}`,
            }
        },
    },
})
