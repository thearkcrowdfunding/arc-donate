import bannerAssetOne from './NumbersBannerOne.jpg';
import bannerAssetTwo from './NumbersBannerTwo.jpg';
import bannerAssetThree from './NumbersBannerThree.jpg';

import mobileBannerAssetOne from './MobileNumbersBannerMobileOne.jpg';
import mobileBannerAssetTwo from './MobileNumbersBannerMobileTwo.jpg';
import mobileBannerAssetThree from './MobileNumbersBannerMobileThree.jpg';
import './index.css';

export default function KovchegNumbers() {
    return (
        <>
            <div className="banner-container kovcheg-numbers">
                <img src={bannerAssetOne.src} className='banner-background-img desktop-only'></img>
                <img src={mobileBannerAssetOne.src} className='banner-background-img mobile-only'></img>
                <div className='banner-overlay no-fader'>
                    <div className='banner-overlay-content kovcheg-numbers-content'>
                        <div className='kovcheg-numbers-header'>
                            Помогает бесплатно изучить <br className='desktop-only' />
                            новый язык <br className='mobile-only' /> и профессию
                        </div>
                        <div className='kovcheg-numbers-group'>
                            <div className='gradient-number'>{'>'}5000</div>
                            <div className='gradient-number-group-text'>человек прошли наши курсы</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-container kovcheg-numbers">
                <img src={bannerAssetTwo.src} className='banner-background-img desktop-only'></img>
                <img src={mobileBannerAssetTwo.src} className='banner-background-img mobile-only'></img>
                <div className='banner-overlay no-fader'>
                    <div className='banner-overlay-content kovcheg-numbers-content'>
                        <div className='kovcheg-numbers-header'>
                            Помогает встретиться <br />с единомышленниками
                        </div>
                        <div className='kovcheg-numbers-group'>
                            <div className='gradient-number'>{'>'}26000</div>
                            <div className='gradient-number-group-text'><b>человек</b> побывали на наших<br className='mobile-only' /> мероприятиях <br className='desktop-only' />
                                <b>в 20 странах мира <br className='mobile-only' /> и онлайн</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-container kovcheg-numbers">
                <img src={bannerAssetThree.src} className='banner-background-img desktop-only'></img>
                <img src={mobileBannerAssetThree.src} className='banner-background-img mobile-only'></img>
                <div className='banner-overlay no-fader'>
                    <div className='banner-overlay-content kovcheg-numbers-content'>
                        <div className='kovcheg-numbers-header'>
                            Помогает построить бизнес, <br className='desktop-only' />найти парнеров <br className='mobile-only' /> или работу <br />вместе с «Ковчег Бизнес»
                        </div>
                        <div className='kovcheg-numbers-group'>
                            <div className='gradient-number'>{'>'}7000</div>
                            <div className='gradient-number-group-text'>предпринимателей в комьюнити</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}