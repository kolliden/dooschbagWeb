// components/SEOHead.tsx
import Head from "next/head";
import bandData from "@/data/bandData"; // so we can pull gigs dynamically

interface SEOHeadProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export default function SEOHead({
    title = "DOOSCHBAG – Punk Band",
    description = "Official DOOSCHBAG punk band website. Tour dates, gallery, members, and mailing list.",
    image = "/media/cover.jpg",
    url = "https://yourdomain.com",
}: SEOHeadProps) {
    // Build JSON-LD structured data:
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        name: "DOOSCHBAG",
        genre: "Punk",
        url: url,
        image: image,
        sameAs: [
            // Add your social links here if you have them:
            // "https://instagram.com/dooschbag",
            // "https://facebook.com/dooschbag"
        ],
        event: bandData.upcomingEvents?.map((ev) => ({
            "@type": "MusicEvent",
            name: `Live at ${ev.venue}`,
            startDate: ev.date,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
                "@type": "Place",
                name: ev.venue,
            },
        })),
    };

    return (
        <Head>
            {/* Basic Meta */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />

            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </Head>
    );
}
