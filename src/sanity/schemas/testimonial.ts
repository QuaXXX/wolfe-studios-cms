import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
            rows: 3,
            description: 'The testimonial text from the client',
            validation: (Rule) => Rule.required().max(300),
        }),
        defineField({
            name: 'authorName',
            title: 'Author Name',
            type: 'string',
            description: 'Name of the person giving the testimonial',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'authorRole',
            title: 'Author Role/Company',
            type: 'string',
            description: 'Their title or company name (e.g., "Owner, Acme Corp")',
        }),
        defineField({
            name: 'authorImage',
            title: 'Author Photo',
            type: 'image',
            description: 'Optional photo of the testimonial author',
            options: { hotspot: true },
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in the testimonials section (1 = first)',
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
            title: 'authorName',
            subtitle: 'authorRole',
            media: 'authorImage',
        },
    },
})
