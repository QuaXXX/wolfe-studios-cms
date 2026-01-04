'use client'

/**
 * Simplified Sanity Studio for non-technical users
 * - Clear, plain-English labels
 * - Hidden advanced features
 * - Organized by what users actually need to edit
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'

// Environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'prod'

// Simple, clean desk structure for non-tech users
const simpleStructure = (S: any) =>
    S.list()
        .title('Edit Your Website')
        .items([
            // Main content they'll edit most
            S.listItem()
                .title('Homepage Hero')
                .id('hero')
                .icon(() => '🏠')
                .child(
                    S.document()
                        .schemaType('hero')
                        .documentId('hero')
                        .title('Edit Homepage Hero')
                ),

            S.divider(),

            // Sections in order they appear on the page
            S.listItem()
                .title('How It Works (3 Steps)')
                .id('steps')
                .icon(() => '📋')
                .child(
                    S.documentTypeList('step')
                        .title('Edit the 3 Steps')
                        .defaultOrdering([{ field: 'stepNumber', direction: 'asc' }])
                ),

            S.listItem()
                .title('Features Checklist')
                .id('features')
                .icon(() => '✓')
                .child(
                    S.documentTypeList('feature')
                        .title('Edit Features')
                        .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),

            S.listItem()
                .title('Why Choose Us')
                .id('differentiators')
                .icon(() => '💡')
                .child(
                    S.documentTypeList('differentiator')
                        .title('Edit Why Choose Us Cards')
                        .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),

            S.listItem()
                .title('Before & After Examples')
                .id('examples')
                .icon(() => '🖼️')
                .child(
                    S.documentTypeList('example')
                        .title('Edit Before/After Images')
                        .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),

            S.listItem()
                .title('Client Testimonials')
                .id('testimonials')
                .icon(() => '💬')
                .child(
                    S.documentTypeList('testimonial')
                        .title('Edit Testimonials')
                        .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),

            S.divider(),

            // Less frequently edited
            S.listItem()
                .title('Website Settings')
                .id('settings')
                .icon(() => '⚙️')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                        .title('Edit Website Settings')
                ),

            S.listItem()
                .title('Footer')
                .id('footer')
                .icon(() => '📝')
                .child(
                    S.document()
                        .schemaType('footer')
                        .documentId('footer')
                        .title('Edit Footer')
                ),
        ])

export default defineConfig({
    name: 'default',
    title: 'Wolfe Studios Website Editor',

    projectId,
    dataset,

    plugins: [
        structureTool({ structure: simpleStructure }),
        // Removed visionTool - confusing for non-tech users
    ],

    schema: {
        types: schemaTypes,
    },

    // Hide the "Create new document" button for singleton types
    document: {
        newDocumentOptions: (prev, { creationContext }) => {
            // Only show create button for list types, not singletons
            const allowedTypes = ['step', 'feature', 'differentiator', 'example', 'testimonial']
            return prev.filter((item) => allowedTypes.includes(item.templateId))
        },
    },
})
