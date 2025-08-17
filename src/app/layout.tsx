import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
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
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const backgroundStyleGray = {
    backgroundImage: 'radial-gradient(circle, #C4C4C4 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 bg-gray-50" style={backgroundStyleGray}>
              {children}
            </main>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
