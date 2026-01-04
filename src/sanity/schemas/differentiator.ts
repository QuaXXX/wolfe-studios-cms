import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'differentiator',
    title: 'Why Choose Us',
    type: 'document',
    liveEdit: true,
    fields: [
        defineField({
            name: 'title',
            title: 'Card Title',
            type: 'string',
            description: '💡 Short, punchy headline. Example: "One person. Direct communication."',
            validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
            name: 'description',
            title: 'Card Description',
            type: 'text',
            rows: 2,
            description: '💡 Explain why this matters to customers (1-2 sentences)',
            validation: (Rule) => Rule.required().max(150),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: '💡 Position on the page (1 = first, 2 = second, etc.)',
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
            title: 'title',
            order: 'order',
        },
        prepare({ title, order }) {
            return {
                title: order ? `${order}. ${title}` : title,
            }
        },
    },
})
