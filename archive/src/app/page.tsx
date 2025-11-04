import { redirect } from '@/i18n/routing';

export default function RootPage() {
  return redirect('/ru');
}

// Enable static rendering for root page
export const dynamic = 'force-static';
