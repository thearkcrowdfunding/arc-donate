import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/config';

export default createMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    '/((?!api|_next|.*\\.).*)',
    '/en/:path*'
  ]
};
