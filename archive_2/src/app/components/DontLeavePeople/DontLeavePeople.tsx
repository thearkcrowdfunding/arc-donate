import Script from "next/script";
import DonationProgress from "../DonationProgress/DonationProgress"
import bannerAsset from './EndBlock.jpg';
import './index.css';

export default function DontLeavePeople() {
  return <><div className="banner-container dont-leave-people">
    <img src={bannerAsset.src} className='banner-background-img'></img>
    <div className='banner-overlay no-fader'>
      <div className='banner-overlay-content dont-leave-people-content'>
        <div className='dont-leave-people-header'>
          Не оставляйте<br className="mobile-only" /> людей в беде
        </div>
        <DonationProgress />

        <a href='#donate' id='dont-leave-button' className='home-banner-help-button'>помочь сейчас!</a>
      </div>
    </div>
  </div >
    <Script id="ga-dont-leave-button-click">
      {`
                      const dontLeaveButton = document.getElementById('dont-leave-button');
                      if (dontLeaveButton) {
                        dontLeaveButton.addEventListener('click', () => {
                                try{        
                            gtag('event', 'scroll_to_donate_button_click');
                            console.log("scroll_to_donate_button_click");
                          }catch(e){
                          }
                        });
                      }
                    `}
    </Script>
  </>
}