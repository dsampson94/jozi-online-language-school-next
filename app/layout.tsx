import React from 'react';
import './globals.css';
import { Inter, Lexend } from 'next/font/google';
import clsx from 'clsx';
import I18nWrapper from '../components/i18n/I18nWrapper';
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata = {
    title: 'Jozi Online Language School',
    description: 'Learn conversational and business English with native teachers from South Africa. Tailor-made topics, grammatical corrections, and more.',
    keywords: 'Jozi Online Language School, Johannesburg Language School, Online Language School, Zulu Lessons, Afrikaans Lessons, English Lessons, Johannesburg',
};

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lexend',
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    // JSON-LD data as a JS object
    const schemaData = {
        "@context": "http://schema.org",
        "@type": "EducationalOrganization",
        "name": "Jozi Online Language School",
        "url": "https://www.jozionlinelanguageschool.co.za",
        "description": metadata.description,
        "logo": "https://www.jozionlinelanguageschool.co.za/jols-logo.png",
        "sameAs": [
            "https://www.facebook.com/jozionlinelanguageschool",
            "https://twitter.com/jozionlinelanguageschool",
            "https://instagram.com/jozionlinelanguageschool",
            "https://linkedin.com/company/jozionlinelanguageschool",
            "https://www.youtube.com/@jozionlinelanguageschool",
            "https://tiktok.com/@jozionlinelanguageschool"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+27796949704",
            "contactType": "Customer Service",
            "email": "info@jozionlinelanguageschool.com",
            "url": "https://www.jozionlinelanguageschool.co.za"
        }
    };

    return (
        <html
            lang="en"
            className={clsx(
                'h-full scroll-smooth bg-white antialiased',
                inter.variable,
                lexend.variable,
            )}
        >
        <head>
            {/* Prevent translation of the title and content */}
            <meta name="google" content="notranslate" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />

            {/* Open Graph Meta Tags for better sharing on social media */}
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.jozionlinelanguageschool.co.za" />
            <meta property="og:image" content="https://www.jozionlinelanguageschool.co.za/jols-logo.png" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content="https://www.jozionlinelanguageschool.co.za/jols-logo.png" />

            {/* Structured Data (Schema.org JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <title>{metadata.title}</title>
            <GoogleAnalytics />
        </head>
        <body className="flex h-full flex-col"> <I18nWrapper>{children}</I18nWrapper></body>
        </html>
    );
}
