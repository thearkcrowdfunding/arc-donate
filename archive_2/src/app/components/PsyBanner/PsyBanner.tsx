import bannerAsset from './psychologistBanner.jpg';
import './index.css';

export default function PsyBanner() {
    return (<div className="banner-container psy-container">
        <img src={bannerAsset.src} className='banner-background-img'></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content psy-content'>
                <div className='psy-header'>Психологи «Ковчега» каждый день <br className='desktop-only' />
                    ведут <br className='mobile-only' /> личные консультации <br />
                    и группы поддержки</div>

                <div className='law-text'>Каждый месяц к нам обращается <br className='mobile-only' /><span>более 100 человек</span></div>
                <div className='psy-number-group'>
                    <div className='gradient-number'>{'>'}14000</div>
                    <div className='gradient-number-group-text'>человек уже получили бесплатную<br /> психологическую помощь <br />и смогли пережить самые тяжелые<br /> моменты </div>
                </div>
            </div>
        </div>
    </div>
    )
}