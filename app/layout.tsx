import type React from "react"
import "@/app/globals.css"
import { Inter, Fraunces } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif" })

export const metadata = {
  title: "Caywood Brown Foundation — Transforming Lives Across the Niger Delta",
  description: "Established in 2006 (RC: 0022482). Empowering youth through digital technology, music excellence, addiction recovery, and graduate career placement.",
  icons: {
    icon: "/images/logo-150x87.png",
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
