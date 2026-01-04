import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * Webhook handler for Sanity content changes.
 * This is called by Sanity when content is published.
 * It revalidates the home page so changes appear quickly.
 */
export async function POST(request: NextRequest) {
    // Verify the webhook secret
    const secret = request.headers.get('x-sanity-webhook-secret')

    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
        return NextResponse.json(
            { message: 'Invalid secret' },
            { status: 401 }
        )
    }

    try {
        // Revalidate the home page
        revalidatePath('/')

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
        })
    } catch (err) {
        console.error('Error revalidating:', err)
        return NextResponse.json(
            { message: 'Error revalidating' },
            { status: 500 }
        )
    }
}

// Also support GET for testing
export async function GET() {
    return NextResponse.json({
        message: 'Revalidation webhook endpoint. Use POST with x-sanity-webhook-secret header.',
    })
}
