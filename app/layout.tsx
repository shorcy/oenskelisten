import '@/styles/dist.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';
import GlobalFooter from './GlobalFooter';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Daniiel playground</title>
      </head>
      <body>
        <GlobalNav />
        <main className="min-h-screen">{children}</main>
        <GlobalFooter />
      </body>
    </html>
  );
}
