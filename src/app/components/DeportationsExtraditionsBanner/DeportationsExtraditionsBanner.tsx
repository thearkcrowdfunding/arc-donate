import './index.css';
import bannerAsset from './DeportationsBanner.jpg';

export default function DeportationsExtraditionsBanner() {
    return (
        <div className="banner-container deportations-banner">
            <img src={bannerAsset.src} className='banner-background-img'></img>
            <div className='banner-overlay no-fader'>
                <div className='banner-overlay-content deportations-banner-content'>
                    <div className='deportations-banner-header'>
                        Депортациии, экстрадициии,<br />
                        запреты на въезд
                    </div>
                    <div className='deportations-banner-text'>
                        <b>Безопасных мест становится всё меньше</b>,<br className='desktop-only' /> и все <b>больше людей</b><br className='mobile-only' /> <b>подвергаются <br className='desktop-only' /> давлению</b><br className='mobile-only' /> и <b>преследованиям</b>
                    </div>
                    <div className='deportations-banner-text'>
                        <b>У нас нет государства</b>, <b>которое защищает наши права</b>.<br />
                        <b>Cкорее наоборот</b>.<br className='mobile-only' /> <b>Но у нас есть мы сами</b>
                    </div>
                </div>
            </div>
        </div >
    )
}