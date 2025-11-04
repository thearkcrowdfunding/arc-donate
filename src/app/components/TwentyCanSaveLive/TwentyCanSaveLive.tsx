import bannerAsset from './TwentyCanSave.jpg';
import './index.css';

export default function TwentyCanSaveLive() {
    return <div className="banner-container twenty-can-save">
        <img src={bannerAsset.src} className='banner-background-img'></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content twenty-can-save-content'>
                <div className='twenty-can-save-header'>
                    Ваши 20 долларов спасут<br className='mobile-only' /> чью-то жизНь!
                </div>
                <div className='twenty-can-save-group'>
                    <div className='twenty-can-save-text medium'>До <span>конца ноября</span> нужно <span>собрать</span><br />
                        всего <span>4000 долларов</span> регулярными платежами
                    </div>
                    <div className='twenty-can-save-text'>Это всего 200 человек по 20 долларов</div>
                </div>
                <div className='twenty-can-save-text'>Стань одним из них!</div>
            </div>
        </div>
    </div >
}