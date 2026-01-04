import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'step',
    title: 'How It Works - Step',
    type: 'document',
    fields: [
        defineField({
            name: 'stepNumber',
            title: 'Step Number',
            type: 'number',
            description: 'Order of this step (1, 2, 3...)',
            validation: (Rule) => Rule.required().min(1).max(10),
        }),
        defineField({
            name: 'title',
            title: 'Step Title',
            type: 'string',
            validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
            name: 'description',
            title: 'Step Description',
            type: 'text',
            rows: 2,
            validation: (Rule) => Rule.required().max(150),
        }),
    ],
    orderings: [
        {
            title: 'Step Number',
            name: 'stepNumberAsc',
            by: [{ field: 'stepNumber', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            stepNumber: 'stepNumber',
        },
        prepare({ title, stepNumber }) {
            return {
                title: `Step ${stepNumber}: ${title}`,
            }
        },
    },
})
