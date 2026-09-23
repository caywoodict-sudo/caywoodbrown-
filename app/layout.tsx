import type React from "react"
import type { Metadata, Viewport } from "next"
import "@/app/globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#12291b",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://caywoodbrownfoundation.org"),
  title: {
    default: "Caywood Brown Foundation — Transforming Lives & Empowering Communities",
    template: "%s | Caywood Brown Foundation",
  },
  description:
    "Official website of Caywood Brown Foundation (RC: 0022482). Founded in 2006 by Senator Dr. Ipalibo Harry Banigo. Transforming communities across Nigeria through healthcare development, digital education, youth rehabilitation, and SME economic empowerment.",
  keywords: [
    "Caywood Brown Foundation",
    "CBF Nigeria",
    "Senator Dr Ipalibo Harry Banigo",
    "Healthcare Development Nigeria",
    "Routine Immunization Rivers State",
    "Education and Human Development",
    "SMEs and Economic Empowerment",
    "Computer Appreciation Program",
    "Her Voice Her Power Girl Child",
    "Graduate Internship Academy",
    "Youth Rehabilitation Port Harcourt",
    "Nonprofit Organization Nigeria",
    "NGO Abuja",
    "NGO Port Harcourt",
    "National Health Financing Reform",
    "Sugar-Sweetened Beverages Tax Nigeria",
  ],
  authors: [{ name: "Caywood Brown Foundation", url: "https://caywoodbrownfoundation.org" }],
  creator: "Caywood Brown Foundation",
  publisher: "Caywood Brown Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://caywoodbrownfoundation.org",
  },
  icons: {
    icon: [
      { url: "/images/caywood-icon.png", type: "image/png" },
      { url: "/images/logo-150x87.png", sizes: "150x87", type: "image/png" },
    ],
    apple: "/images/caywood-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://caywoodbrownfoundation.org",
    siteName: "Caywood Brown Foundation",
    title: "Caywood Brown Foundation — Healthcare, Education & SME Empowerment",
    description:
      "Founded in 2006 (RC: 0022482). Improving lives and promoting sustainable community development through impactful interventions in healthcare, education, agriculture, entrepreneurship, and social empowerment.",
    images: [
      {
        url: "/images/hero/website-banner.png",
        width: 1200,
        height: 630,
        alt: "Caywood Brown Foundation — Building Futures Across Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CaywoodBrown",
    creator: "@CaywoodBrown",
    title: "Caywood Brown Foundation — Healthcare, Education & SME Empowerment",
    description:
      "Official website of Caywood Brown Foundation (RC: 0022482). Transforming communities across Nigeria since 2006.",
    images: ["/images/hero/website-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// ─── COMPREHENSIVE SCHEMA.ORG JSON-LD (SEO) ───
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": "https://caywoodbrownfoundation.org/#organization",
      name: "Caywood Brown Foundation",
      alternateName: ["CBF", "Caywood Brown"],
      url: "https://caywoodbrownfoundation.org",
      logo: "https://caywoodbrownfoundation.org/images/caywood-logo.png",
      image: "https://caywoodbrownfoundation.org/images/hero/website-banner.png",
      foundingDate: "2006",
      taxID: "RC: 0022482",
      description:
        "To improve lives & promote sustainable community development through impactful interventions in healthcare, education, agriculture, entrepreneurship & social empowerment.",
      founder: {
        "@type": "Person",
        name: "Senator Dr. Ipalibo Harry Banigo",
        jobTitle: "Founder & Senator of the Federal Republic of Nigeria",
      },
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "883 Olu Awotesu Street, Jabi",
          addressLocality: "Abuja",
          addressCountry: "NG",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Close B, 1 IPIC Estate, off Akpajo Elelenwo",
          addressLocality: "Port Harcourt",
          addressRegion: "Rivers State",
          addressCountry: "NG",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+234-803-881-7059",
        contactType: "Public Relations & Secretariat",
        email: "caywoodbrowndocs@gmail.com",
        areaServed: "NG",
        availableLanguage: ["en"],
      },
      sameAs: [
        "https://facebook.com/caywoodbrownfoundation",
        "https://instagram.com/caywoodbrownfoundation",
        "https://linkedin.com/company/caywood-brown-foundation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://caywoodbrownfoundation.org/#website",
      url: "https://caywoodbrownfoundation.org",
      name: "Caywood Brown Foundation",
      description: "Empowering Communities & Building Futures across Nigeria",
      publisher: {
        "@id": "https://caywoodbrownfoundation.org/#organization",
      },
      inLanguage: "en-NG",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#12291b] text-[#faf7f0]" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        {/* Dedicated root container insulating React tree from extension DOM injections */}
        <div id="__app_root" suppressHydrationWarning className="min-h-screen flex flex-col justify-between">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
