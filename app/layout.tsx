import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { File, Folder, Files } from 'fumadocs-ui/components/files';
import { Banner } from 'fumadocs-ui/components/banner';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Banner
            variant="rainbow"
            rainbowColors={[
              'rgba(0, 89, 255, 0.5)',
              'rgba(0, 89, 255, 0.5)',
              'transparent',
              'rgba(0, 89, 255, 0.5)',
              'transparent',
              'rgba(0, 81, 255, 0.5)',
              'transparent',
            ]}
          >
            Welcome to our new docs! Please keep in mind we are still working on making everything is as accurate as possible. Join us on discord and ask us questions if you are unsure.
          </Banner>

          {children}</RootProvider>
      </body>
    </html>
  );
}
