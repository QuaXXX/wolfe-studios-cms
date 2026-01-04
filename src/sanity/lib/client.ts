import { createClient } from 'next-sanity'

// Environment variables (will be set in .env.local and Vercel)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'prod'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Client for fetching data on the frontend (read-only)
export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // Enable CDN for fast, cached reads
    // No token needed - dataset is public for reads
})

// Client for preview mode (optional, for draft content)
export const previewClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN,
})

// Helper to get the appropriate client
export function getClient(preview = false) {
    return preview ? previewClient : client
}
