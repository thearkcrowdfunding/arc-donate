import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  // If no locale is provided, use Russian (for root path)
  const resolvedLocale = locale || 'ru';

  return {
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default,
    locale: resolvedLocale,
  };
}); 
