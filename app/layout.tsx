import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#12291b",
}

export const metadata = {
  metadataBase: new URL('https://caywoodbrownfoundation.org'),
  title: "Caywood Brown Foundation — Transforming Lives Across the Niger Delta",
  description: "Established in 2006 (RC: 0022482). Empowering youth through digital technology, music excellence, addiction recovery, and graduate career placement.",
  icons: {
    icon: "/images/logo-150x87.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: 'website',
    title: 'Caywood Brown Foundation',
    description: 'Empowering youth across the Niger Delta through digital skills, creative arts, and holistic development since 2006.',
    url: 'https://caywoodbrownfoundation.org',
    images: [{ url: '/images/hero/website-banner.png', width: 1200, height: 630, alt: 'Caywood Brown Foundation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caywood Brown Foundation',
    description: 'Empowering youth across the Niger Delta through digital skills, creative arts, and holistic development since 2006.',
    images: ['/images/hero/website-banner.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg">Skip to main content</a>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
