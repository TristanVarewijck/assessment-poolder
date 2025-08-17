import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Next.js Template - Project Template',
    template: '%s | Next.js Template',
  },
  description:
    'A modern Next.js template with TypeScript, Tailwind CSS, and Drizzle ORM',
  keywords: [
    'nextjs',
    'typescript',
    'tailwindcss',
    'drizzle',
    'template',
    'react',
    'web development',
  ],
  authors: [{ name: 'Next.js Template' }],
  creator: 'Next.js Template',
  publisher: 'Next.js Template',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'Next.js Template - Project Template',
    description:
      'A modern Next.js template with TypeScript, Tailwind CSS, and Drizzle ORM',
    siteName: 'Next.js Template',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js Template - Modern Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Template',
    description:
      'A modern Next.js template with TypeScript, Tailwind CSS, and Drizzle ORM',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            {/* <Navbar /> */}
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
