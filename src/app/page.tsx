import ArcNavigationBar from './components/ArcNavigationBar/ArcNavigationBar';
import './index.css';
import './components/banner.css';
import HomeBanner from './components/HomeBanner/HomeBanner';
// import TallBanner from './components/TallBanner/TallBanner';
// import PsyBanner from './components/PsyBanner/PsyBanner';
import ReviewEkaterina from './components/Reviews/ReviewEkaterina/ReviewEkaternia';
import ReviewDmitri from './components/Reviews/ReviewDmitri/ReviewDmitri';
// import SupportOur20By100 from './components/SupportOur20By100/SupportOur20By100';
// import UntilNovember from './components/UntilNovember/UntilNovember';
import DifficultSituation from './components/DifficultSituations/DifficultSituation';
// import MaximumEfficiency from './components/MaximumEfficiency/MaximumEfficiency';
// import FromStartOfTheWar from './components/FromStartOfTheWar/FromStartOfTheWar';
// import HelpCanChangeEverything from './components/HelpCanChangeEverything/HelpCanChangeEverything';
// import TwentyCanSaveLive from './components/TwentyCanSaveLive/TwentyCanSaveLive';
// import DontLeavePeople from './components/DontLeavePeople/DontLeavePeople';
import Footer from './components/Footer/Footer';
import DonationForm from './components/DonationForm/DonationForm';
import { Suspense } from 'react';
import ReviewAnastasia from './components/Reviews/ReviewAnastasia/ReviewAnastasia';
import GovernmentPressure from './components/GovernmentPressure/GovernmentPressure';
import DeportationsExtraditionsBanner from './components/DeportationsExtraditionsBanner/DeportationsExtraditionsBanner';
import KovchegDescription from './components/KovchegDescription/KovchegDescription';
import KovchegUnites from './components/KovchegUnites/KovchegUnites';
import KovchegNumbers from './components/KovchegNumbers/KovchegNumbers';
import KovchegToHelp from './components/KovchegToHelp/KovchegToHelp';
import KovchegJoinUs from './components/KovchegJoinUs/KovchegJoinUs';
import BurakovaBanner from './components/BurakovaBanner/BurakovaBanner';
import Script from 'next/script';
// import LawyersBanner from './components/LawyersBanner/PsyBanner';

export default function Home() {
  return (
    <div className="arc-global-container">
      <ArcNavigationBar />

      <Script id="ga-page-view">
        {`
          try{
            gtag('event', 'page_view');
            console.log("page_view");
          }catch(e){
            console.log(e)
          }
        `}
      </Script>
      <HomeBanner />
      <GovernmentPressure />
      <DeportationsExtraditionsBanner />
      {/* KOVCHEG DESCRIPTION */}
      <KovchegDescription />

      <Suspense>
        <DonationForm idx="1" id="donate" title={<>ПОМОГИТЕ ПОСТРОИТЬ ДИАСПОРУ<br />
          ПО ОБЕ СТОРОНЫ ГРАНИЦЫ</>} />
      </Suspense>
      {/* KOVCHEG UNITES */}
      <KovchegUnites />
      <KovchegNumbers />
      <DifficultSituation />
      {/* ONLY NEED 30K USD */}
      <KovchegToHelp />
      <KovchegJoinUs />
      <Suspense>
        <DonationForm idx="2" id="donate-2" title={<>ПОМОГИТЕ ПОСТРОИТЬ ДИАСПОРУ<br />
          ПО ОБЕ СТОРОНЫ ГРАНИЦЫ</>} />
      </Suspense>
      <ReviewEkaterina />
      <ReviewDmitri />
      <ReviewAnastasia />
      <BurakovaBanner />
      <Suspense>
        <DonationForm idx="3" id="donate-2" title={<>ПОМОГИТЕ ПОСТРОИТЬ ДИАСПОРУ<br />
          ПО ОБЕ СТОРОНЫ ГРАНИЦЫ</>} />
      </Suspense>
      <Footer />
      {/*  */}
    </div>
  );
}
