import './index.css';
import bannerAsset from './BurakovaBanner.jpg';
import mobileBannerAsset from './MobileBurakovaBanner.jpg';

export default function BurakovaBanner() {
    return (
        <div className="banner-container burakova">
            <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
            <img src={mobileBannerAsset.src} className='banner-background-img mobile-only'></img>
            <div className='banner-overlay no-fader'>
                <div className='banner-overlay-content burakova-content'>
                    <div className='burakova-text'>
                        <b>У нас нет государства</b>, которое <b>может<br className='desktop-only' /> быть нашим представителем и защитить.</b></div>
                    <div className='burakova-text'>
                        <b>Но у нас есть мы сами</b> — неравнодушные<br className='desktop-only' /> люди, готовые протянуть руку помощи,<br /> действовать вместе и отстаивать каждого <br />единомышленника!
                    </div>
                    <div className='burakova-name'>АНАСТАСИЯ<br />БУРАКОВА</div>
                </div>
            </div>
        </div>
    )
}