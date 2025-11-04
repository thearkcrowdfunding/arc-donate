import './index.css'; import bannerAsset from './GovernmentPressure.jpg';

export default function GovernmentPressure() {
    return (
        <div className="banner-container government-pressure">
            <img src={bannerAsset.src} className='banner-background-img'></img>
            <div className='banner-overlay no-fader'>
                <div className='banner-overlay-content government-pressure-content'>
                    <div className='government-pressure-header'>
                        Люди находятся под постоянным прессом государственной машины
                    </div>
                    <div className='government-pressure-group'>
                        <div className='government-pressure-text medium'>Машины, которая хочет их сломать</div>
                    </div>
                    <div className='government-pressure-text'>И в такой ситуации <span>важно</span>, <br />чтобы было к кому <br className='mobile-only' /> <span>обратиться за помощью</span></div>
                </div>
            </div>
        </div >
    )
}