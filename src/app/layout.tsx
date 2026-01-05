import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chat AI - Modern Messaging Platform',
  description: 'A modern, AI-powered chat application with real-time messaging, smart search, and intuitive user interface.',
  keywords: ['chat', 'messaging', 'AI chat', 'real-time chat', 'communication platform'],
  authors: [{ name: 'Chat AI Team' }],
  creator: 'Chat AI',
  publisher: 'Chat AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chat-ai-eight-livid.vercel.app'), // Update with your actual domain
  openGraph: {
    title: 'Chat AI - Modern Messaging Platform',
    description: 'A modern, AI-powered chat application with real-time messaging, smart search, and intuitive user interface.',
    url: 'https://chat-ai-eight-livid.vercel.app', // Update with your actual domain
    siteName: 'Chat AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Chat AI Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chat AI - Modern Messaging Platform',
    description: 'A modern, AI-powered chat application with real-time messaging, smart search, and intuitive user interface.',
    images: ['/twitter-image.png'], // Add your Twitter Card image
    creator: '@chatai', // Update with your Twitter handle
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
    // google: 'your-google-verification-code', // Add when you have it
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
  );
}
