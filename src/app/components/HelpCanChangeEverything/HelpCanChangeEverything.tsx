import bannerAsset from './Help.jpg'
import mobileBannerAsset from './MobileHelp.jpg'
import './index.css';

export default function HelpCanChangeEverything() {

    return <><div className="banner-container help-can-change">
        <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
        <img src={mobileBannerAsset.src} className='banner-background-img mobile-only'></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content help-can-change-content'>
                <div className='help-can-change-header'>
                    «Вовремя оказанная помощь – это разница <br />
                    между свободой и несвободой»
                </div>

                <div className='help-can-change-text'>Юрист «Ковчега»</div>
            </div>
        </div>
    </div>
    </>
}