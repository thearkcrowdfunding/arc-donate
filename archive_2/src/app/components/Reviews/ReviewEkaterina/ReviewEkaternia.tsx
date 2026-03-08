import './index.css';
import bannerAsset from './ReviewEkaterina.jpg';
import mobileBannerAsset from './MobileArinaReview.jpg'

export default function ReviewEkaterina() {
    return (<div className="banner-container review">
        <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
        <img src={mobileBannerAsset.src} className='banner-background-img mobile-only' ></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content review-group'>
                <div className='review-header'>
                    «Ковчег» дал мне время <b>выдохнуть, просто <br className='desktop-only' />
                        полежать</b>
                    <br className='mobile-only' /> и <b>поплакать</b> — пережить это все<br />
                    и <b>собраться с силами</b>, чтобы как-то начать<br className='desktop-only' /> жить жизнь заново
                </div>
                <div className='review-author'>Арина, уехала из России из-за<br className='mobile-only' /> политического <br className='desktop-only' />преследования
                </div>
            </div>
        </div>
    </div>
    )
}