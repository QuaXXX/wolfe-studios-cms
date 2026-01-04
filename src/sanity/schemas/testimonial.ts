import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Client Testimonial',
    type: 'document',
    liveEdit: true,
    fields: [
        defineField({
            name: 'quote',
            title: 'What They Said',
            type: 'text',
            rows: 3,
            description: '💡 The testimonial quote from your client',
            validation: (Rule) => Rule.required().max(300),
        }),
        defineField({
            name: 'authorName',
            title: 'Client Name',
            type: 'string',
            description: '💡 Who said this?',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'authorRole',
            title: 'Title / Company',
            type: 'string',
            description: '💡 Their job title or company. Example: "Owner, ABC Company"',
        }),
        defineField({
            name: 'authorImage',
            title: 'Photo (Optional)',
            type: 'image',
            description: '💡 A headshot of the client (looks more personal!)',
            options: { hotspot: true },
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: '💡 Which testimonial shows first? (1 = first)',
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
