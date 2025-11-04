import ArcNavigationBar from './components/ArcNavigationBar/ArcNavigationBar';
import './index.css';
import './components/banner.css';
import HomeBanner from './components/HomeBanner/HomeBanner';
import TallBanner from './components/TallBanner/TallBanner';
import PsyBanner from './components/PsyBanner/PsyBanner';
import ReviewEkaterina from './components/Reviews/ReviewEkaterina/ReviewEkaternia';
import ReviewDmitri from './components/Reviews/ReviewDmitri/ReviewDmitri';
import SupportOur20By100 from './components/SupportOur20By100/SupportOur20By100';
import UntilNovember from './components/UntilNovember/UntilNovember';
import DifficultSituation from './components/DifficultSituations/DifficultSituation';
import MaximumEfficiency from './components/MaximumEfficiency/MaximumEfficiency';
import FromStartOfTheWar from './components/FromStartOfTheWar/FromStartOfTheWar';
import HelpCanChangeEverything from './components/HelpCanChangeEverything/HelpCanChangeEverything';
import TwentyCanSaveLive from './components/TwentyCanSaveLive/TwentyCanSaveLive';
import DontLeavePeople from './components/DontLeavePeople/DontLeavePeople';
import Footer from './components/Footer/Footer';
import DonationForm from './components/DonationForm/DonationForm';
import { Suspense } from 'react';
import ReviewAnastasia from './components/Reviews/ReviewAnastasia/ReviewAnastasia';
import GovernmentPressure from './components/GovernmentPressure/GovernmentPressure';
import LawyersBanner from './components/LawyersBanner/PsyBanner';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="arc-global-container">
      <ArcNavigationBar />

      <Script id="ga-page-view">
        {`
          
                  try{        
                    gtag('event', 'page_view');
                    gtag('event', 'donate_page_view');
                    console.log("page_view");
                  }catch(e){
                  }
        `}
      </Script>
      <HomeBanner />
      <TallBanner />
      <GovernmentPressure />
      <DifficultSituation />
      <Suspense>
        <DonationForm idx="1" id="donate" title={<>помогите тем,<br className='mobile-only' /> кто в беде</>} />
      </Suspense>
      {/* MAD REGIME BANNER */}
      <ReviewDmitri />
      <PsyBanner />
      {/* <LawyersBanner /> */}
      <ReviewEkaterina />

      <LawyersBanner />
      <ReviewAnastasia />
      <SupportOur20By100 />
      <UntilNovember />
      <Suspense>
        <DonationForm idx="2" id="donate-2" title={<>помогите тем,<br className='mobile-only' /> кто в беде</>} />
      </Suspense>
      <MaximumEfficiency />
      <FromStartOfTheWar />
      <HelpCanChangeEverything />
      <TwentyCanSaveLive />
      <DontLeavePeople />
      <Footer />
    </div>
  );
}
