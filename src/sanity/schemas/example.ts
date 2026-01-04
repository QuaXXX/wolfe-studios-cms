import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'example',
    title: 'Before/After Example',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Name',
            type: 'string',
            description: 'Internal name for this example (e.g., "Lynco Redesign")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'beforeImage',
            title: 'Before Image',
            type: 'image',
            description: 'Screenshot of the old website',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'beforeLabel',
            title: 'Before Label',
            type: 'string',
            description: 'Label shown on the before image',
            initialValue: 'Before',
        }),
        defineField({
            name: 'afterImage',
            title: 'After Image',
            type: 'image',
            description: 'Screenshot of the redesigned website',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'afterLabel',
            title: 'After Label',
            type: 'string',
            description: 'Label shown on the after image',
            initialValue: 'After',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in the examples section (1 = first)',
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
            media: 'afterImage',
        },
    },
})
