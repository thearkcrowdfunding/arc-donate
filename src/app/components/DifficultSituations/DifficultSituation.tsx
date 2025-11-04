import bannerAsset from './Difficult.jpg';
import mobileBannerAsset from './MobileDifficultBanner.jpg'
import './index.css';

export default function DifficultSituation() {
    return (
        <div className="banner-container difficult-situations–container">
            <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
            <img src={mobileBannerAsset.src} className='banner-background-img mobile-only' ></img>
            <div className='banner-overlay'>
                <div className='banner-overlay-content difficult-situations-content'>
                    <div className='difficult-header'>«Ковчег» помогает антивоенным<br className='desktop-only' />
                        россиянам в самых тяжелых ситуациях</div>
                    <div className='difficult-horizontal-grid'>
                        <div className='difficult-horizontal-item'>
                            <div className='difficult-number'>{'>'}4 500</div>
                            <div className='difficult-item-text'>человек получили<br />экстренную помощь<br />
                                с жильем </div>
                        </div>
                        <div className='difficult-horizontal-item'>
                            <div className='difficult-number'>{'>'}160 000</div>
                            <div className='difficult-item-text'>получили юридическую<br />помощь</div>
                        </div>
                        <div className='difficult-horizontal-item'>
                            <div className='difficult-number'>{'>'}14 000</div>
                            <div className='difficult-item-text'>получили помощь<br />психолога</div>
                        </div>
                    </div>
                    <div className='difficult-text'>А всего <span>помощь получили</span> более <span>200 000 человек</span></div>
                    <div className='difficult-header center'>Каждый месяц <br className='mobile-only' /> к нам обращаЕтся <br />
                        более 400 человек</div>
                </div>
            </div>
        </div>
    )
}