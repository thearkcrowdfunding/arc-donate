import bannerAsset from './UntilNovember.jpg';
import mobileBannerAsset from './MobileUntilNovember.jpg';
import './index.css';

export default function UntilNovember() {
    return (<div className="banner-container until-november-container">
        <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
        <img src={mobileBannerAsset.src} className='banner-background-img mobile-only' ></img>
        <div className='banner-overlay'>
            <div className='banner-overlay-content until-november'>
                <div className='until-november-header'>До <span>конца декабря</span> <br className='mobile-only' /> нужно <span>собрать</span><br />
                    всего <span>4000 долларов</span> регулярными платежами</div>

                <div className='until-november-text'>Это всего 200 человек по 20 долларов</div>

                <div className='until-november-text'>
                    Присоединяйтесь! Поддержите!<br />
                    <div>Помогите нам помогать тем, кто в беде</div>

                </div>
            </div>
        </div>
    </div>
    )
}