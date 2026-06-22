import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "KriGenix | AI Automation & Digital Transformation",
    template: "%s | KriGenix",
  },
  description:
    "KriGenix helps businesses scale through intelligent technology, automation, and digital innovation. We design, build, and automate digital solutions that help businesses grow faster, operate smarter, and stay ahead of the competition.",
  keywords: [
    "AI Automation",
    "AI Agents",
    "Web Development",
    "Mobile App Development",
    "SaaS Development",
    "Cloud Solutions",
    "Digital Transformation",
    "Technology Consulting",
  ],
  authors: [{ name: "KriGenix" }],
  creator: "KriGenix",
  publisher: "KriGenix",
  metadataBase: new URL("https://krigenix.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KriGenix",
    title: "KriGenix | AI Automation & Digital Transformation",
    description:
      "We design, build, and automate digital solutions that help businesses grow faster, operate smarter, and stay ahead of the competition.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KriGenix | AI Automation & Digital Transformation",
    description:
      "We design, build, and automate digital solutions that help businesses grow faster, operate smarter, and stay ahead of the competition.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KriGenix",
              url: "https://krigenix.com",
              description:
                "We design, build, and automate digital solutions that help businesses grow faster, operate smarter, and stay ahead of the competition.",
              foundingDate: "2024",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "sales",
                email: "hello@krigenix.com",
              },
              sameAs: [
                "https://linkedin.com/company/krigenix",
                "https://github.com/krigenix",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#111827]">
        {children}
      </body>
    </html>
  )
}
