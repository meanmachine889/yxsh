import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "yash",
    template: "%s | Yash Bharadwaj"
  },
  description: "Yash Bharadwaj is a skilled Full Stack Blockchain Developer specializing in Web3, DeFi, smart contracts, React, Next.js, and modern web technologies. Portfolio showcasing innovative blockchain solutions and full-stack development projects.",
  keywords: [
    "Yash Bharadwaj",
    "Full Stack Developer",
    "Blockchain Developer",
    "Web3 Developer",
    "Smart Contract Developer",
    "React Developer",
    "Next.js Developer",
    "Solidity Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Yash Bharadwaj" }],
  creator: "Yash Bharadwaj",
  publisher: "Yash Bharadwaj",
  metadataBase: new URL("https://yxsh.in"),
  alternates: {
    canonical: "https://yxsh.in",
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
  category: "Technology",

  icons: {
    icon: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749390603/y_qqrdor.svg",
    shortcut: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749390603/y_qqrdor.svg",
    apple: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749390603/y_qqrdor.svg",
  },

  openGraph: {
    title: "Yash Bharadwaj - Portfolio",
    description: "Full Stack Blockchain Developer specializing in Web3, DeFi, smart contracts, and modern web technologies. Check out my work.",
    url: "https://yxsh.in",
    siteName: "Yash Bharadwaj Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749394872/huhuhuhuhuhu_ncgf48.png",
        width: 1200,
        height: 630,
        alt: "Yash Bharadwaj - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yash Bharadwaj - Portfolio",
    description: "Full Stack Blockchain Developer specializing in Web3, DeFi, smart contracts, and modern web technologies. Check out my work.",
    site: "@YashBha95474776",
    creator: "@YashBha95474776",
    images: [
      "https://res.cloudinary.com/dnfv0h10u/image/upload/v1749394872/huhuhuhuhuhu_ncgf48.png",
    ],
  },

  verification: {
    google: "aSrkrn7M_iNU1jWLu-8R2Y8pnXw3JCLNWWc3ZdXe2E4",
  },

  other: {
    "application-name": "Yash Bharadwaj Portfolio",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yash Bharadwaj",
              "jobTitle": "Full Stack Blockchain Developer",
              "description": "Full Stack Blockchain Developer specializing in Web3, DeFi, smart contracts, and modern web technologies",
              "url": "https://yxsh.in",
              "sameAs": [
                "https://twitter.com/YashBha95474776",
                "https://github.com/meanmachine889",
                "https://www.linkedin.com/in/yash-bharadwaj-47871b251/"
              ],
              "knowsAbout": [
                "Blockchain Development",
                "Full Stack Development",
                "Web3",
                "DeFi",
                "Smart Contracts",
                "React",
                "Next.js",
                "Solidity",
                "Ethereum"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
