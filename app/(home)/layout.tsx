import { BookIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout 
      {...baseOptions} 
      links={[
        {
          text: 'Documentation',
          url: '/docs/framework/getting-started',
          secondary: false,
        },
        {
          text: 'API Documentation',
          url: 'docs/framework/API/services/activate_service',
          secondary: false,
        },
         {
          text: 'Discord Server',
          url: 'https://discord.gg/UN4VVc2hWJ',
          secondary: false,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
