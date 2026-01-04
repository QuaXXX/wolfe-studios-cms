import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'step',
    title: 'How It Works Step',
    type: 'document',
    liveEdit: true,
    fields: [
        defineField({
            name: 'stepNumber',
            title: 'Step Number',
            type: 'number',
            description: '💡 Which step is this? (1, 2, or 3)',
            validation: (Rule) => Rule.required().min(1).max(10),
        }),
        defineField({
            name: 'title',
            title: 'Step Title',
            type: 'string',
            description: '💡 Short title for this step. Example: "Share Your Current Site"',
            validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
            name: 'description',
            title: 'Step Description',
            type: 'text',
            rows: 2,
            description: '💡 Brief explanation of what happens in this step (1-2 sentences)',
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
