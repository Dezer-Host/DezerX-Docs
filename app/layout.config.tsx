import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center space-x-2 p-2 sm:space-x-4">
        <img src="/logo.png" className="h-12 sm:h-16 w-auto" alt="DezerX Spartan Logo" />
        <span className="text-lg sm:text-2xl font-semibold">DezerX Spartan</span>
      </div>

    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
