'use client';

import dynamic from 'next/dynamic';

const ExternalFrame = dynamic(() => import('~/components/ExternalFrame'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-4">
      <ExternalFrame />
    </main>
  );
}
