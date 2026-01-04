'use client'

/**
 * This configuration is used for the Sanity Studio embedded in the Next.js app.
 * https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'

// Environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'prod'

// Custom desk structure to organize content in a user-friendly way
const deskStructure = (S: any) =>
    S.list()
        .title('Content')
        .items([
            // Global Settings group
            S.listItem()
                .title('⚙️ Site Settings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                        .title('Site Settings')
                ),
            S.listItem()
                .title('🏠 Hero Section')
                .child(
                    S.document()
                        .schemaType('hero')
                        .documentId('hero')
                        .title('Hero Section')
                ),
            S.listItem()
                .title('📝 Footer')
                .child(
                    S.document()
                        .schemaType('footer')
                        .documentId('footer')
                        .title('Footer')
                ),
            S.divider(),
            // Content Collections
            S.listItem()
                .title('📋 How It Works Steps')
                .child(S.documentTypeList('step').title('Steps')),
            S.listItem()
                .title('✓ Features')
                .child(S.documentTypeList('feature').title('Features')),
            S.listItem()
                .title('💡 Why Us Points')
                .child(S.documentTypeList('differentiator').title('Differentiators')),
            S.listItem()
                .title('🖼️ Before/After Examples')
                .child(S.documentTypeList('example').title('Examples')),
            S.listItem()
                .title('💬 Testimonials')
                .child(S.documentTypeList('testimonial').title('Testimonials')),
        ])

export default defineConfig({
    name: 'default',
    title: 'Wolfe Studios CMS',

    projectId,
    dataset,

    plugins: [
        structureTool({ structure: deskStructure }),
        // Vision is a tool for exploring your data with GROQ queries
        visionTool({ defaultApiVersion: '2024-01-01' }),
    ],

    schema: {
        types: schemaTypes,
    },
})
