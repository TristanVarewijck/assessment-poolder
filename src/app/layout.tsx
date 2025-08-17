import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'LP Data Visualizer - DeFi Liquidity Pool Analytics',
    template: '%s | LP Data Visualizer',
  },
  description:
    'Explore and analyze liquidity pool data from multiple DEX protocols including Beefy Finance. Real-time LP analytics, token balances, and pool performance metrics.',
  keywords: [
    'defi',
    'liquidity pools',
    'dex',
    'beefy finance',
    'cryptocurrency',
    'blockchain analytics',
    'liquidity pool data',
    'decentralized finance',
    'pool analytics',
    'token balances',
    'yield farming',
    'amm',
    'automated market maker',
  ],
  authors: [{ name: 'LP Data Visualizer' }],
  creator: 'LP Data Visualizer',
  publisher: 'LP Data Visualizer',
  metadataBase: new URL('https://cashbecks.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cashbecks.com',
    title: 'LP Data Visualizer - DeFi Liquidity Pool Analytics',
    description:
      'Explore and analyze liquidity pool data from multiple DEX protocols including Beefy Finance. Real-time LP analytics, token balances, and pool performance metrics.',
    siteName: 'LP Data Visualizer',
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
