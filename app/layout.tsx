
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samir Mansuri | Full Stack Web Developer in Godhra | MERN & PHP Specialist',
  description: 'Samir Mansuri is a Full Stack Web Developer in Godhra, Gujarat. Specializing in PHP, MERN stack, and freelance web solutions for businesses.',
  keywords: 'Web Developer in Godhra, Samir Mansuri, Full Stack Web Developer, Web Developer, Freelance Developer Gujarat, Frontend Backend Developer, Godhra, samirxdev, adXcode, MERN Stack Developer, PHP Developer',
  authors: [{ name: 'Samir Mansuri', url: 'https://samirxdev.com' }],
  creator: 'Samir Mansuri',
  publisher: 'Samir Mansuri',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  
  // Open Graph Tags
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samirxdev.com',
    siteName: 'Samir Mansuri - Full Stack Web Developer',
    title: 'Samir Mansuri | Full Stack Web Developer in Godhra',
    description: 'Specializing in PHP, MERN stack, and freelance web solutions for local businesses in Gujarat.',
    images: [
      {
        url: 'https://readdy.ai/api/search-image?query=Professional%20young%20Indian%20software%20developer%20portrait%2C%20confident%20smile%2C%20modern%20office%20setting%2C%20natural%20lighting%2C%20business%20casual%20attire%2C%20clean%20workspace%20with%20monitors%2C%20technology%20environment%2C%20high%20quality%20professional%20headshot%2C%2025%20years%20old%20developer&width=1200&height=630&seq=samir-og-image&orientation=landscape',
        width: 1200,
        height: 630,
        alt: 'Samir Mansuri - Full Stack Web Developer in Godhra, Gujarat'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Samir Mansuri | Full Stack Web Developer in Godhra',
    description: 'Specializing in PHP, MERN stack, and freelance web solutions for local businesses in Gujarat.',
    creator: '@samirxdev',
    images: ['https://readdy.ai/api/search-image?query=Professional%20young%20Indian%20software%20developer%20portrait%2C%20confident%20smile%2C%20modern%20office%20setting%2C%20natural%20lighting%2C%20business%20casual%20attire%2C%20clean%20workspace%20with%20monitors%2C%20technology%20environment%2C%20high%20quality%20professional%20headshot%2C%2025%20years%20old%20developer&width=1200&height=630&seq=samir-twitter-image&orientation=landscape']
  },
  
  // Additional Meta Tags
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Godhra',
    'geo.position': '22.7746;73.6146',
    'ICBM': '22.7746, 73.6146',
    'revisit-after': '7 days',
    'language': 'English',
    'distribution': 'global',
    'rating': 'general',
    'coverage': 'worldwide',
    'target': 'all',
    'HandheldFriendly': 'true',
    'MobileOptimized': 'width',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#2563eb',
    'msapplication-TileColor': '#2563eb',
    'application-name': 'Samir Mansuri Portfolio',
    'msapplication-tooltip': 'Full Stack Web Developer in Godhra',
    'canonical': 'https://samirxdev.com'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://samirxdev.com" />
        <link rel="alternate" hrefLang="en" href="https://samirxdev.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Samir Mansuri",
              "jobTitle": "Full Stack Web Developer",
              "description": "Full Stack Web Developer specializing in PHP, MERN stack, and freelance web solutions",
              "url": "https://samirxdev.com",
              "email": "mansurisamir493@gmail.com",
              "telephone": "+91-9409593511",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Godhra",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.linkedin.com/in/samirxdev/",
                "https://github.com/Samir720"
              ],
              "knowsAbout": [
                "Web Development",
                "Full Stack Development",
                "MERN Stack",
                "PHP",
                "JavaScript",
                "React",
                "Node.js",
                "MongoDB",
                "MySQL"
              ],
              "alumniOf": "ITM SLS Baroda University",
              "worksFor": {
                "@type": "Organization",
                "name": "adXcode Agency"
              }
            })
          }}
        />
        
        {/* Structured Data - Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Samir Mansuri - Web Developer",
              "description": "Professional web development services in Godhra, Gujarat. Specializing in full stack development with MERN stack and PHP.",
              "url": "https://samirxdev.com",
              "telephone": "+91-9409593511",
              "email": "mansurisamir493@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Godhra",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "22.7746",
                "longitude": "73.6146"
              },
              "openingHours": "Mo-Sa 09:00-21:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "Place",
                "name": "Gujarat, India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full Stack Web Development",
                      "description": "Complete web application development using MERN stack"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Frontend Development",
                      "description": "Modern responsive web interfaces using React and Next.js"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Backend Development",
                      "description": "Server-side development with Node.js, PHP, and database integration"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data - Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Samir Mansuri Web Development Services",
              "description": "Professional web development services in Godhra, Gujarat",
              "provider": {
                "@type": "Person",
                "name": "Samir Mansuri"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Gujarat, India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "MERN Stack Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "PHP Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Freelance Web Solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}