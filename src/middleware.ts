import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/config';

export default createMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  localePrefix: 'as-needed',
  localeDetection: false,
});

export const config = {
  matcher: [
    // Match all paths except api, _next, static files, and root
    '/((?!api|_next|_vercel|.*\\.[^/]*$).*)',
    // Also match root exactly
    '/'
  ]
};
