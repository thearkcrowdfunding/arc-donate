import DonationProgress from "../DonationProgress/DonationProgress"
import bannerAsset from './EndBlock.jpg';
import './index.css';

export default function DontLeavePeople() {
    return <div className="banner-container dont-leave-people">
        <img src={bannerAsset.src} className='banner-background-img'></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content dont-leave-people-content'>
                <div className='dont-leave-people-header'>
                    Не оставляйте<br className="mobile-only" /> людей в беде
                </div>
                <DonationProgress />

                <a href='#donate' className='home-banner-help-button'>помочь сейчас</a>
            </div>
        </div>
    </div >
}