import type { Metadata, Viewport } from "next";
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
    default: "CV Builder Pro - Créateur de CV Professionnel Gratuit",
    template: "%s | CV Builder Pro"
  },
  description: "Créez un CV professionnel moderne et ATS-friendly en quelques minutes. 5 modèles personnalisables, export PDF instantané, multilingue. Sans inscription requis. Optimisé pour le recrutement.",
  keywords: ["CV", "resume", "créateur de CV", "CV professionnel", "modèle de CV", "générateur de CV", "CV gratuit", "CV ATS", "curriculum vitae", "resume builder"],
  authors: [{ name: "CV Builder Pro" }],
  creator: "CV Builder Pro",
  publisher: "CV Builder Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://cvbuilder.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'fr': '/fr',
      'es': '/es',
      'de': '/de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cvbuilder.com',
    title: 'CV Builder Pro - Créateur de CV Professionnel Gratuit',
    description: 'Créez un CV professionnel moderne et ATS-friendly en quelques minutes. 5 modèles personnalisables, export PDF instantané.',
    siteName: 'CV Builder Pro',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CV Builder Pro - Créateur de CV Professionnel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV Builder Pro - Créateur de CV Professionnel Gratuit',
    description: 'Créez un CV professionnel moderne et ATS-friendly en quelques minutes. 5 modèles personnalisables, export PDF instantané.',
    images: ['/twitter-image.png'],
    creator: '@cvbuilderpro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google59202cfc3fd98be7',
    yandex: 'your-yandex-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
