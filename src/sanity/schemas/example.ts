import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'example',
    title: 'Before/After Example',
    type: 'document',
    liveEdit: true,
    fields: [
        defineField({
            name: 'title',
            title: 'Project Name',
            type: 'string',
            description: '💡 Name this example (for your reference only - visitors won\'t see this)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'beforeImage',
            title: '❌ Before Image',
            type: 'image',
            description: '💡 Upload a screenshot of the OLD website design',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'beforeLabel',
            title: 'Before Label',
            type: 'string',
            description: '💡 Text shown above the before image (usually just "Before")',
            initialValue: 'Before',
        }),
        defineField({
            name: 'afterImage',
            title: '✅ After Image',
            type: 'image',
            description: '💡 Upload a screenshot of the NEW redesigned website',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'afterLabel',
            title: 'After Label',
            type: 'string',
            description: '💡 Text shown above the after image (usually just "After")',
            initialValue: 'After',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: '💡 If you have multiple examples, which shows first? (1 = first)',
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
