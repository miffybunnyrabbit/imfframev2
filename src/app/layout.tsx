import type { Metadata } from 'next';
import '~/app/globals.css';
import { Providers } from '~/app/providers';

export const metadata: Metadata = {
  title: 'Your App – Farcaster Frame',
  description: 'app.imf.bz as a Farcaster Frames v2 Demo',
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://i.imgur.com/33rSf59.png',
  },
  openGraph: {
    images: ['https://i.imgur.com/33rSf59.png'], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <title>My App Title</title>
      <meta name="description" content="This is my app" />
      <meta name="fc:frame" content="vNext" />
      <meta name="fc:frame:image" content="https://i.imgur.com/33rSf59.png" />
      <meta property="og:image" content="https://i.imgur.com/33rSf59.png" />
    </head>
    <body>{children}</body>
  </html>
  );
}
