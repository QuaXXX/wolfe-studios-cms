import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'differentiator',
    title: 'Why Us - Differentiator',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Short headline (e.g., "One person. Direct communication.")',
            validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            description: 'Explanation text for this point',
            validation: (Rule) => Rule.required().max(150),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in the grid (1 = first)',
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
                title: title,
                subtitle: order ? `Order: ${order}` : 'No order set',
            }
        },
    },
})
