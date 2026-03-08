import Script from 'next/script';
import DonationProgress from '../DonationProgress/DonationProgress';
import bannerAsset from './HomeBackground.jpg';
import mobileBannerAsset from './MobileHomeBanner.jpg';
import './index.css';
// CHANGES 2
export default function HomeBanner() {
    return (
        <>
            <div className="banner-container home-banner">
                <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
                <img src={mobileBannerAsset.src} className='banner-background-img mobile-only' ></img>
                <div className='banner-overlay'>
                    <div className='banner-overlay-content home-banner'>
                        <h2 className='home-banner-header'>Помоги <br className='mobile-only' /> защитить людей <br />
                            от преследований</h2>
                        <div className='sticky'>
                            <p className='home-banner-paragraph'>
                                Каждый день <b>антивоенные россияне сталкиваются с арестами</b>,<br className='desktop-only' /> <b>угрозой тюрьмы</b> и <b>преследованиями</b>.<br className='mobile-only' /> Помоги им получить <b>экстренную юридическую</b> и <b>психологическую помощь</b>, <b>помощь с жильем</b>
                            </p>
                            <DonationProgress />
                            <a href="#donate" id="main-donate-button" className='home-banner-help-button'>помочь сейчас!</a>
                        </div>
                    </div>
                </div>
            </div>
            <Script id="ga-main-button-click">
                {`
                      const mainDonateButton = document.getElementById('main-donate-button');
                      if (mainDonateButton) {
                        mainDonateButton.addEventListener('click', () => {
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
    )
}