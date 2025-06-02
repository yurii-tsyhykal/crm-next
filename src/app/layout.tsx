import React from 'react';
import { Plus_Jakarta_Sans, Montserrat } from 'next/font/google';
import './globals.css';
import Providers from './components/providers';

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});
const secondFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font?.className} ${secondFont?.className} font-jakarta`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
