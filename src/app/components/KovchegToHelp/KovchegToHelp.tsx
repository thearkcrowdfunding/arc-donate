import './index.css';
import bannerAsset from './KovchegDescriptionBanner.jpg';

export default function KovchegToHelp() {
    return (
        <div className="banner-container kovcheg-description">
            <img src={bannerAsset.src} className='banner-background-img'></img>
            <div className='banner-overlay no-fader'>
                <div className='banner-overlay-content kovcheg-description-content'>
                    <div className='kovcheg-description-header'>
                        Чтобы помогать в самых тяжелых ситуациях <br /> и объединять людей, <br className='mobile-only' /> каждый месяц
                        нужно всего 30 тысяч долларов
                    </div>
                    <div className='kovcheg-description-group'>
                        <div className='kovcheg-description-text'>Мы работаем только благодаря вашей поддержке – <br className='desktop-only' />
                            частным пожертвованиям
                        </div>
                        <div className='kovcheg-description-text'>
                            Чтобы продолжать <br className='mobile-only' /> нужна ваша помощь!
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}