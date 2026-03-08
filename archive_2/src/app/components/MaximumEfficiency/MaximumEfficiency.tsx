import bannerAsset from './efficiency.jpg';
import mobileBannerAsset from './mobile_efficiency.jpg';
import './index.css';

export default function MaximumEfficiency() {
    return (
        <div className="banner-container max-eff-container">
            <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
            <img src={mobileBannerAsset.src} className='banner-background-img mobile-only'></img>
            <div className='banner-overlay no-fader'>
                <div className='banner-overlay-content max-eff-content'>
                    <div className='max-eff-header'>Ковчег работает <br className='mobile-only' /> максимально <br className='desktop-only' />
                        эффективно</div>
                    <div className='max-eff-text'>Благодаря волонтёрам, опыту команды <br />
                        и оптимизации процессов <b>мы тратим</b><br />
                        <b>каждый доллар с максимальной отдачей,</b> <br className='desktop-only' />
                        справляясь с большими вызовами <br className='desktop-only' />
                        минимальными средствами</div>
                </div>
            </div>
        </div>
    )
}