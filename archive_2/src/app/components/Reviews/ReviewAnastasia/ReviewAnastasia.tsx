import './index.css';
import bannerAsset from './ReviewAnastasia.jpg';
import mobileBannerAsset from './MobileAnastasiaReview.jpg'

export default function ReviewAnastasia() {
    return (<div className="banner-container review">
        <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
        <img src={mobileBannerAsset.src} className='banner-background-img mobile-only' ></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content review-group'>
                <div className='review-header'>
                    <b>Помощь «Ковчега» <br className='mobile-only' /> сильно облегчила <br className='desktop-only' />мне эмиграцию</b>. После переезда<br className='mobile-only' /> в <br className='desktop-only' />Армению мы вместе<br className='mobile-only' /> с украинской <br className='desktop-only' />диаспорой сделали проект, который <br className='desktop-only' />помогает украинским беженцам
                </div>
                <div className='review-author'>
                    Анатасия, уехала из России в марте 2022 года, <br className='desktop-only' />волонтерка проекта Dopomoga.am
                </div>
            </div>
        </div>
    </div>
    )
}