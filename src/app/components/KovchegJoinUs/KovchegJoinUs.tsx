import './index.css';
import bannerAsset from './JoinUsBanner.jpg';
import mobileBannerAsset from './MobileJoinUsBanner.jpg';

export default function KovchegJoinUs() {
    return (
        <div className="banner-container kovcheg-description">
            <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
            <img src={mobileBannerAsset.src} className='banner-background-img mobile-only'></img>
            <div className='banner-overlay '>
                <div className='banner-overlay-content kovcheg-description-content'>
                    <div className='kovcheg-description-header'>Присоединяйтесь! <br />
                        ПОДДЕРЖИТЕ «Ковчег» <br />
                        и своиХ единомышленниКОВ
                    </div>
                    <div className='kovcheg-description-group'>
                        <div className='kovcheg-description-text'>
                            Поддержите теx,<br className='mobile-only' /> кто делает каждый день! <br />
                            <b>Это вклад в наше общее будущее</b>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}