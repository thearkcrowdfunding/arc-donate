import './index.css';
import bannerAsset from './ReviewDmitri.jpg';
import mobileBannerAsset from './MobileDmitriiReview.jpg'

export default function ReviewDmitri() {
    return (<div className="banner-container review">
        <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
        <img src={mobileBannerAsset.src} className='banner-background-img mobile-only' ></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content review-group'>
                <div className='review-header'>
                    «Ковчег» дал мне крышу <br className='mobile-only' /> над головой, <br className='desktop-only' />
                    когда <b>я уже жил<br className='mobile-only' /> на улице</b> в Стамбуле.<br /><br />

                    Эту помощь сложно <br className='mobile-only' /> переоценить: <br className='desktop-only' />
                    <b>я уже был в депрессии и мог бы просто<br /> сойти с ума</b> на улице
                </div>
                <div className='review-author'>Дмитрий, живет в эмиграции<br className='mobile-only' /> с начала войны
                </div>
            </div>
        </div>
    </div>
    )
}