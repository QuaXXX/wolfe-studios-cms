// This script populates Sanity with the existing website content
// Run with: npx sanity dataset import seed-data.ndjson prod

const documents = [
    // Site Settings
    {
        _id: "siteSettings",
        _type: "siteSettings",
        siteName: "Wolfe Studios",
        siteDescription: "Wolfe Studios redesigns outdated small-business websites into fast, mobile-first sites that bring in customers.",
        headerCta: "Get a Free Mockup",
        sectionTitles: {
            howItWorks: "Three steps to a site you're proud of",
            whatsIncluded: "Everything you need. Nothing you don't.",
            whyUs: "Straightforward redesigns for busy business owners",
            examples: "What a redesign looks like",
            examplesSubtitle: "Conceptual before and after example",
            contact: "Ready to modernize your website?",
            contactSubtitle: "Tell us about your business and we'll send a free homepage mockup."
        }
    },
    // Hero
    {
        _id: "hero",
        _type: "hero",
        title: "Your website should work as hard as you do.",
        subtitle: "We redesign outdated small-business websites into fast, mobile-first sites that actually bring in customers.",
        ctaText: "See How It Works",
        ctaLink: "#how-it-works"
    },
    // Footer
    {
        _id: "footer",
        _type: "footer",
        copyrightText: "© 2026 Wolfe Studios. All rights reserved.",
        contactPrompt: "Questions?",
        contactEmail: "hello@wolfestudios.co"
    },
    // Step 1
    {
        _id: "step-1",
        _type: "step",
        stepNumber: 1,
        title: "Share Your Current Site",
        description: "Send us your URL and tell us what's not working."
    },
    // Step 2
    {
        _id: "step-2",
        _type: "step",
        stepNumber: 2,
        title: "Get a Free Mockup",
        description: "We'll redesign your homepage so you can see the difference."
    },
    // Step 3
    {
        _id: "step-3",
        _type: "step",
        stepNumber: 3,
        title: "Launch Your New Site",
        description: "Approve the design, and we'll build and launch it for you."
    },
    // Features
    {
        _id: "feature-1",
        _type: "feature",
        text: "Custom mobile-first design",
        order: 1
    },
    {
        _id: "feature-2",
        _type: "feature",
        text: "Fast-loading pages",
        order: 2
    },
    {
        _id: "feature-3",
        _type: "feature",
        text: "Contact form that works",
        order: 3
    },
    {
        _id: "feature-4",
        _type: "feature",
        text: "SEO basics done right",
        order: 4
    },
    {
        _id: "feature-5",
        _type: "feature",
        text: "Ownership of all files",
        order: 5
    },
    // Differentiators
    {
        _id: "diff-1",
        _type: "differentiator",
        title: "One person. Direct communication.",
        description: "No account managers or handoffs. You work directly with the person building your site.",
        order: 1
    },
    {
        _id: "diff-2",
        _type: "differentiator",
        title: "Fixed pricing. No surprises.",
        description: "Know the full cost before you commit. No hidden fees or scope creep charges.",
        order: 2
    },
    {
        _id: "diff-3",
        _type: "differentiator",
        title: "Fast turnaround.",
        description: "Most projects launch in under a week. You're not waiting months for a website.",
        order: 3
    },
    {
        _id: "diff-4",
        _type: "differentiator",
        title: "You own everything.",
        description: "Your site, your files, your domain. No lock-in or proprietary systems.",
        order: 4
    }
];

// Convert to NDJSON format
documents.forEach(doc => console.log(JSON.stringify(doc)));
