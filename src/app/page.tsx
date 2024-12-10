import { redirect } from '@/i18n/routing';

export default function RootPage() {
  // Redirect root to Russian version
  return redirect('/ru');
}

// Enable static rendering for root page
export const dynamic = 'force-static';
