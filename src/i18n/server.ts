import { createTranslator as _createTranslator } from 'next-intl';
import { headers } from 'next/headers';

export async function getMessages(namespace: string) {
  const headersList = headers();
  const locale = headersList.get('x-next-intl-locale') || 'ru';
  
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return {
    t: _createTranslator({ locale, messages, namespace })
  };
} 
