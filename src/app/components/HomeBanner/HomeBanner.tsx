import Script from 'next/script';

import bannerAsset from './HomeBanner.jpg';
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
                        <h2 className='home-banner-header'>Строим сообщество<br />
                            единомышленников<br />
                            по обе стороны границы</h2>
                        <div className='sticky'>
                            <p className='home-banner-paragraph'>
                                <b>Создаем площадку</b> и <b>условия</b>, <br />
                                чтобы вместе <b>строить новую жизнь</b>
                            </p>
                            <div className='home-buttons-group'>

                                <a href="#donate" id="main-donate-button" className='home-banner-help-button'>ПОМОЧЬ!</a>
                                <a href="#content" className='home-banner-know-more-button'>узнать больше</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='content'></div>
            <Script id="ga-main-button-click">
                {`
                      const mainDonateButton = document.getElementById('main-donate-button');
                      if (mainDonateButton) {
                        mainDonateButton.addEventListener('click', () => {
                    try{
                            gtag('event', 'scroll_to_donate_button_click');
                            console.log("scroll_to_donate_button_click");
                          }catch(e){
                            console.log(e)
                          }
                        });
                      }
                    `}
            </Script>
        </>
    )
}