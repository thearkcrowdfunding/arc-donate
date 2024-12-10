import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = {
  locales: ['en', 'ru'],
  defaultLocale: 'ru' as const,
  localePrefix: 'always' as const
};

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing); 
