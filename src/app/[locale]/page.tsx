import dynamic from 'next/dynamic'
import { HeroServer } from "@/components/hero-server"

// Dynamic imports for main sections
const MainContent = dynamic(() => import('@/components/main-content'), {
  loading: () => <div className="h-[2000px]" />,
  ssr: true
})

const SecondaryContent = dynamic(() => import('@/components/secondary-content'), {
  loading: () => <div className="h-[3600px]" />,
  ssr: false
})

export default async function LocalePage() {
  return (
    <div className="bg-kovcheg">
      <HeroServer />
      <div className="mx-auto">
        <MainContent />
        <SecondaryContent />
      </div>
    </div>
  )
}
