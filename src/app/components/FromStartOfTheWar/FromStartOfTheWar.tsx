import bannerAsset from './FromFebruary.jpg';
import "./index.css";
import mobileBannerAsset from './MobileFebruary.jpg'

export default function FromStartOfTheWar() {
    return <div className="banner-container from-start-of-the-war">
        <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
        <img src={mobileBannerAsset.src} className='banner-background-img mobile-only'></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content from-start-of-the-war-content'>
                <div className='from-start-of-the-war-header'>Мы все вместе проживали <br />
                    все
                    что происходило<br className='mobile-only' /> с 22 февраля 2022</div>

                <div className='from-start-of-the-war-text'>И мы знаем, что иногда,<br className='mobile-only' /> чтобы <b>выдержать и продолжать идти<br className='mobile-only' /> дальше,</b> отчаянно <b>нужна поддержка<br className='mobile-only' /> и помощь</b></div>
            </div>
        </div>
    </div >
}